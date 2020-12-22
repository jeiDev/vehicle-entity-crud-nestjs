import { EntityRepository, Repository } from "typeorm";
import { AccountDetails } from "./account-details.entity";

@EntityRepository(AccountDetails)
export class AccountDetailsRepository extends Repository<AccountDetails>{}