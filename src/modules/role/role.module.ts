import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleAccountRepository } from './role.repository';

@Module({
    imports: [TypeOrmModule.forFeature([RoleAccountRepository])]
})
export class RoleModule {}
