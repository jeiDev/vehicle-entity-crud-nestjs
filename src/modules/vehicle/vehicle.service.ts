import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { VehiclesRepository } from './vehicle.repository';

@Injectable()
export class VehicleService{
    constructor(
        @InjectRepository(VehiclesRepository)
        private readonly _vehiclesRepository: VehiclesRepository
    ){}
}