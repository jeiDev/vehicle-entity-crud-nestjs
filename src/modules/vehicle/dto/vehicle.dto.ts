import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";
import { ColorVehicle } from "src/modules/color-vehicle/color-vehicle.entity";
import { BrandVehicle } from "../../brand-vehicle/brand-vehicle.entity";
import { ModelVehicle } from "../../model-vehicle/model-vehicle.entity";
import { TypeVehicle } from "../../type-vehicle/type-vehicle.entity";

export class VehicleDto{
    @IsNotEmpty()
    @IsString()
    chasi: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(8)
    passengerQuantity: number;

    @IsNotEmpty()
    type: TypeVehicle;

    @IsNotEmpty()
    brand: BrandVehicle;

    @IsNotEmpty()
    model: ModelVehicle;

    colors: ColorVehicle[];
}