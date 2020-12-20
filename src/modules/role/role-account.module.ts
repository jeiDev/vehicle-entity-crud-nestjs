import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleAccountRepository } from './role-account.repository';

@Module({
    imports: [TypeOrmModule.forFeature([RoleAccountRepository])]
})
export class RoleModule {}
