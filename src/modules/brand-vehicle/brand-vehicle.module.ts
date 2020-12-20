import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandVehicleRepository } from './brand-vehicle.repository';
import { BrandVehicleService } from './brand-vehicle.service';

@Module({
    imports: [TypeOrmModule.forFeature([BrandVehicleRepository])],
    providers: [BrandVehicleService]
})
export class BrandVehicleModule {}
