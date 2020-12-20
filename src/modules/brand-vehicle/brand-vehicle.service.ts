import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { BrandVehicleRepository } from './brand-vehicle.repository';

@Injectable()
export class BrandVehicleService{
    constructor(
        @InjectRepository(BrandVehicleRepository)
        private readonly _brandVehicleRepository: BrandVehicleRepository
    ){}
}