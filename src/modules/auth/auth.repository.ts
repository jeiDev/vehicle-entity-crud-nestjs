import { hash, genSaltSync } from "bcryptjs";
import { EntityRepository, getConnection, Repository } from "typeorm";
import { AccountDetails } from "../account/account-details.entity";
import { AccountDetailsRepository } from "../account/account-details.repository";
import { Account } from "../account/account.entity";
import { Role } from "../role/role.entity";
import { RoleRepository } from "../role/role.repository";
import { RoleType } from "../role/roleType.enum";
import { RegisterDto } from "./dto";

@EntityRepository(Account)
export class AuthRepository extends Repository<Account>{
    async register(registerDto: RegisterDto){
        const {email, password, firstName, lastName} = registerDto;
        const account = new Account();

        const salt = await genSaltSync(10);
        account.email = email;
        account.password = await hash(password,  salt);
        
        await account.save()

        const accountDetails: AccountDetailsRepository = await getConnection().getRepository(AccountDetails)
        const role: RoleRepository = await getConnection().getRepository(Role);
        
        await  accountDetails.create({firstName, lastName, idOwner: account.id}).save()
        await role.create({level: RoleType.ACCOUNT, idOwner: account.id}).save();
    }
}