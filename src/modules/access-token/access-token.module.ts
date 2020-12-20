import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessTokenRepository } from './access-token.repository';
import { AccessTokenService } from './access-token.service';

@Module({
    imports: [TypeOrmModule.forFeature([AccessTokenRepository])],
    providers: [AccessTokenService]
})
export class AccessTokenModule {}
