import { EntityRepository, Repository } from "typeorm";
import { BrandVehicle } from "./brand-vehicle.entity";

@EntityRepository(BrandVehicle)
export class BrandVehicleRepository extends Repository<BrandVehicle>{}