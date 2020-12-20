import { Controller, Get } from '@nestjs/common';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
    constructor(private readonly _vehicleService: VehicleService){}

    @Get()
    async getVehicle(){
        return await this._vehicleService.get()
    }
}
