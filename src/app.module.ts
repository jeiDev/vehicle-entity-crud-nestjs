import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './modules/account/account.module';
import { AccessTokenModule } from './modules/access-token/access-token.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { RoleModule } from './modules/role/role-account.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { BrandVehicleModule } from './modules/brand-vehicle/brand-vehicle.module';
import { TypeVehicleModule } from './modules/type-vehicle/type-vehicle.module';
import { ColorVehicleModule } from './modules/color-vehicle/color-vehicle.module';
import { ModelVehicleModule } from './modules/model-vehicle/model-vehicle.module';

@Module({
  imports: [AccountModule, AccessTokenModule, ConfigModule, DatabaseModule, RoleModule, VehicleModule, BrandVehicleModule, TypeVehicleModule, ColorVehicleModule, ModelVehicleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
