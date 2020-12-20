import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeVehicleRepository } from './type-vehicle.repository';
import { TypeVehicleService } from './type-vehicle.service';

@Module({
    imports: [TypeOrmModule.forFeature([TypeVehicleRepository])],
    providers: [TypeVehicleService]
})
export class TypeVehicleModule {}
