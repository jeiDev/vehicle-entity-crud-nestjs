import { EntityRepository, Repository } from "typeorm";
import { Vehicles } from "./vehicle.entity";

@EntityRepository(Vehicles)
export class VehicleRepository extends Repository<Vehicles>{}