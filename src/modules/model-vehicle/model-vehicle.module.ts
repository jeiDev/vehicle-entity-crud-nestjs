import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelVehicleRepository } from './model-vehicle.repository';
import { ModelVehicleService } from './model-vehicle.service';

@Module({
    imports: [TypeOrmModule.forFeature([ModelVehicleRepository])],
    providers: [ModelVehicleService]
})
export class ModelVehicleModule {}
