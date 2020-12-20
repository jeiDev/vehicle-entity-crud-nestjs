import { EntityRepository, Repository } from "typeorm";
import { ModelVehicle } from "./model-vehicle.entity";

@EntityRepository(ModelVehicle)
export class ModelVehicleRepository extends Repository<ModelVehicle>{}