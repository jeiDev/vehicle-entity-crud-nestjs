import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { VehicleDto } from './dto/vehicle.dto';
import { VehicleService } from './vehicle.service';

@Controller('vehicles')
export class VehicleController {
    constructor(private readonly _vehicleService: VehicleService){}

    @Get('/:id')
    async get(@Param() id: number){
        return await this._vehicleService.get(id)
    }

    @Get()
    async getAll(){
        return await this._vehicleService.getAll()
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() data: VehicleDto){
        return await this._vehicleService.create(data)
    }
}
