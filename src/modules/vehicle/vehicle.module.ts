import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleRepository } from './vehicle.repository';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';

@Module({
    imports: [TypeOrmModule.forFeature([VehicleRepository])],
    providers: [VehicleService],
    controllers: [VehicleController]
})
export class VehicleModule {}
