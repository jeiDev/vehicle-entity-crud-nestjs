import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Account } from './account.entity';
import { AccountRepository } from './account.repository';

@Injectable()
export class AccountService{
    constructor(
        @InjectRepository(AccountRepository)
        private readonly _accountRepository: AccountRepository
    ){}

    async get(id: number) : Promise<Account>{
        const account = await this._accountRepository.findOne({where: {id}})
        return account;
    }
}