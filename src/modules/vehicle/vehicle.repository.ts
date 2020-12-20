import { EntityRepository, Repository } from "typeorm";
import { Vehicles } from "./vehicle.entity";

@EntityRepository(Vehicles)
export class VehiclesRepository extends Repository<Vehicles>{}