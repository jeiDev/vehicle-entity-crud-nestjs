import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly _authService: AuthService
    ){}

    @Post('/register')
    @UsePipes(ValidationPipe)
    async register(@Body() registerDto: RegisterDto){
        return this._authService.register(registerDto);
    }


    @Post('/login')
    @UsePipes(ValidationPipe)
    async login(@Body() loginDto: LoginDto){
        return this._authService.login(loginDto);
    }
}
