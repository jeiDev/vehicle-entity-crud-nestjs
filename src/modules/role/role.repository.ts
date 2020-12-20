import { EntityRepository, Repository } from "typeorm";
import { RoleAccount } from "./role-account.entity";

@EntityRepository(RoleAccount)
export class RoleAccountRepository extends Repository<RoleAccount>{}