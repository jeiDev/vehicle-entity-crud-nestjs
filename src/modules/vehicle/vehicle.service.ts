import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { VehicleRepository } from './vehicle.repository';

@Injectable()
export class VehicleService{
    constructor(
        @InjectRepository(VehicleRepository)
        private readonly _vehicleRepository: VehicleRepository
    ){}

    async get(){
        return "testing";
    }
}