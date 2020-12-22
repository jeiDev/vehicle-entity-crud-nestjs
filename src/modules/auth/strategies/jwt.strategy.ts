import { Injectable, UnauthorizedException } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { InjectRepository } from "@nestjs/typeorm"
import { ExtractJwt, Strategy } from "passport-jwt"
import { Configuration } from "../../../config/config.keys"
import { ConfigService } from "../../../config/config.service"
import { AuthRepository } from "../auth.repository"
import { IJwt } from "../jwt.interface"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        private readonly _configService: ConfigService,

        @InjectRepository(AuthRepository)
        private readonly _authRepository: AuthRepository
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: _configService.get(Configuration.JWT_SECRET)
        })
    }

    async validate(payload: IJwt){
        const {email} = payload;

        const account = await this._authRepository.findOne({where: {email, deletedAt: null}})

        if(!account){
            throw new UnauthorizedException();
        }

        return payload;
    }
}