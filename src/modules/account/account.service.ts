import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { AccountRepository } from './account.repository';

@Injectable()
export class AccountService{
    constructor(
        @InjectRepository(AccountRepository)
        private readonly _accountRepository: AccountRepository
    ){}
}