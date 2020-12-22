import { BadRequestException, Injectable, NotFoundException,  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { BrandVehicleRepository } from '../brand-vehicle/brand-vehicle.repository';
import { ColorVehicle } from '../color-vehicle/color-vehicle.entity';
import { ColorVehicleRepository } from '../color-vehicle/color-vehicle.repository';
import { ModelVehicleRepository } from '../model-vehicle/model-vehicle.repository';
import { TypeVehicleRepository } from '../type-vehicle/type-vehicle.repository';
import { VehicleDto } from './dto/vehicle.dto';
import { Vehicle } from './vehicle.entity';
import { VehicleRepository } from './vehicle.repository';

@Injectable()
export class VehicleService{
    constructor(
        @InjectRepository(VehicleRepository)
        private readonly _vehicleRepository: VehicleRepository,
        private readonly _typeVehicleRepository: TypeVehicleRepository,
        private readonly _brandVehicleRepository: BrandVehicleRepository, 
        private readonly _modelVehicleRepository: ModelVehicleRepository, 
        private readonly _colorVehicleRepository: ColorVehicleRepository, 
    ){}

    async get(id: number): Promise<Vehicle>{
        if(!id){
            throw new BadRequestException("id must be sent");
        }

        const vehicle: Vehicle = await this._vehicleRepository.findOne(id, {where: {deletedAt: null}})

        if(!vehicle) {
            throw new NotFoundException();
        }

        return vehicle;
    }

    async getAll(): Promise<Vehicle[]>{
        const vehicles: Vehicle[] = await this._vehicleRepository.find();
        return vehicles;
    }

    async create(data: VehicleDto){
        try {
            const type = await this._typeVehicleRepository.save(data.type);
            const brand = await this._brandVehicleRepository.save(data.brand);
            const model = await this._modelVehicleRepository.save(data.model);
            
            let colors: ColorVehicle[] = [];

            await data.colors.forEach(async (color) => {
                const data = await this._colorVehicleRepository.create();

                colors.push(data)
            })

            const vehicle = await this._vehicleRepository.create(data)
                  vehicle.type = type
                  vehicle.brand = brand
                  vehicle.model = model
                  vehicle.colors = colors

            const response = await vehicle.save()
            return response;
        } catch (error) {
            throw new BadRequestException(error.message || "Cannot create vehicle");
        }
    }
}