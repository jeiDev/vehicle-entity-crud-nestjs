import { EntityRepository, Repository } from "typeorm";
import { ColorVehicle } from "./color-vehicle.entity";

@EntityRepository(ColorVehicle)
export class ColorVehicleRepository extends Repository<ColorVehicle>{}