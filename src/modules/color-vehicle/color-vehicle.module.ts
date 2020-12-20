import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorVehicleRepository } from './color-vehicle.repository';
import { ColorVehicleService } from './color-vehicle.service';

@Module({
    imports: [TypeOrmModule.forFeature([ColorVehicleRepository])],
    providers: [ColorVehicleService]
})
export class ColorVehicleModule {}
