import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { ColorVehicleRepository } from './color-vehicle.repository';

@Injectable()
export class ColorVehicleService{
    constructor(
        @InjectRepository(ColorVehicleRepository)
        private readonly _colorVehicleRepository: ColorVehicleRepository
    ){}
}