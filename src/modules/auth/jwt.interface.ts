import { RoleType } from "../role/roleType.enum";

export interface IJwt{
    id: number;
    email: string;
    roles: RoleType[];
    iat?: Date;
}