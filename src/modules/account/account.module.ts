import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountRepository } from './account.repository';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { AccountDetailsRepository } from './account-details.repository';

@Module({
    imports: [TypeOrmModule.forFeature([AccountRepository, AccountDetailsRepository])],
    providers: [AccountService],
    controllers: [AccountController]
})
export class AccountModule {}
