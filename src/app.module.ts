import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './modules/account/account.module';
import { AccessTokenModule } from './modules/access-token/access-token.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { RoleModule } from './modules/role/role.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { BrandVehicleModule } from './modules/brand-vehicle/brand-vehicle.module';
import { TypeVehicleModule } from './modules/type-vehicle/type-vehicle.module';
import { ColorVehicleModule } from './modules/color-vehicle/color-vehicle.module';
import { ModelVehicleModule } from './modules/model-vehicle/model-vehicle.module';
import { Configuration } from './config/config.keys';
import { ConfigService } from './config/config.service';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AccountModule, AccessTokenModule, ConfigModule, DatabaseModule, RoleModule, VehicleModule, BrandVehicleModule, TypeVehicleModule, ColorVehicleModule, ModelVehicleModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService){
    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
