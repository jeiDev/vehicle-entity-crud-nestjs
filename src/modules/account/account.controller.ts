import { Controller, Get, Param, ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('accounts')
export class AccountController {
    constructor(
        private readonly _accountService: AccountService
    ){}

    @Get("/:id")
    @UsePipes(ValidationPipe)
    async get(@Param('id', ParseIntPipe) id: number){
        return this._accountService.get(id);
    }

}
