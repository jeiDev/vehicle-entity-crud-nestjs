import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcryptjs';
import { AccessTokenRepository } from '../access-token/access-token.repository';
import { Account } from '../account/account.entity';
import { RoleType } from '../role/roleType.enum';
import { AuthRepository } from './auth.repository';
import { LoginDto, RegisterDto } from './dto';
import { IJwt } from './jwt.interface';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(AuthRepository)
        private readonly _authRepository: AuthRepository,
        private readonly _accessTokenRepository: AccessTokenRepository,
        private readonly _jwtService: JwtService
    ){}

    async login(loginDto: LoginDto): Promise<{token: string}>{
        const {email, password} = loginDto;
        const account: Account = await this._authRepository.findOne({
            where: {email}
        })

        if(!account){
            throw new NotFoundException("Account does not exist");
        }

        const isValidate = await compare(password, account.password);

        if(!isValidate){
            throw new UnauthorizedException("Invalid credentials");
        }

        const payload: IJwt = {
            id: account.id,
            email: account.email,
            roles: account.roles.map(r => r.level as RoleType)
        }

        const token = await this._jwtService.sign(payload);

        await this._accessTokenRepository.create({idOwner: account.id, token}).save()

        return { token };
    }

    async register(registerDto: RegisterDto): Promise<void>{
        const {email} = registerDto;
        const accountExist = await this._authRepository.findOne({email})

        if(accountExist){
            throw new ConflictException("Email already exists");
        }

        return this._authRepository.register(registerDto)
    }
}
