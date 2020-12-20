import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { ModelVehicleRepository } from './model-vehicle.repository';

@Injectable()
export class ModelVehicleService{
    constructor(
        @InjectRepository(ModelVehicleRepository)
        private readonly _modelVehicleRepository: ModelVehicleRepository
    ){}
}