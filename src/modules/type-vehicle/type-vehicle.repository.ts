import { EntityRepository, Repository } from "typeorm";
import { TypeVehicle } from "./type-vehicle.entity";

@EntityRepository(TypeVehicle)
export class TypeVehicleRepository extends Repository<TypeVehicle>{}