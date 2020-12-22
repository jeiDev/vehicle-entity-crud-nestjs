import { createParamDecorator } from "@nestjs/common";
import { AccountDto } from "../account/dto/account.dto";

export const GetAccount = createParamDecorator((data, req): AccountDto => {
    return req.user;
})