import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { AccessTokenRepository } from './access-token.repository';

@Injectable()
export class AccessTokenService{
    constructor(
        @InjectRepository(AccessTokenRepository)
        private readonly _accessTokenRepository: AccessTokenRepository
    ){}
}