import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { TypeVehicleRepository } from './type-vehicle.repository';

@Injectable()
export class TypeVehicleService{
    constructor(
        @InjectRepository(TypeVehicleRepository)
        private readonly _typeVehicleRepository: TypeVehicleRepository
    ){}
}