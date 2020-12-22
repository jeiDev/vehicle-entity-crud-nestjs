import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleRepository } from './vehicle.repository';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { TypeVehicleRepository } from '../type-vehicle/type-vehicle.repository';
import { BrandVehicleRepository } from '../brand-vehicle/brand-vehicle.repository';
import { ModelVehicleRepository } from '../model-vehicle/model-vehicle.repository';
import { AuthMiddleware } from '../../middlewares/auth/auth.middleware';
import { ColorVehicleRepository } from '../color-vehicle/color-vehicle.repository';

@Module({
    imports: [TypeOrmModule.forFeature([VehicleRepository, TypeVehicleRepository, BrandVehicleRepository, ModelVehicleRepository, ColorVehicleRepository])],
    providers: [VehicleService],
    controllers: [VehicleController]
})
export class VehicleModule implements NestModule{
    configure(consumer: MiddlewareConsumer){
        consumer
            .apply(AuthMiddleware)
            .forRoutes("vehicles")
    }
}
