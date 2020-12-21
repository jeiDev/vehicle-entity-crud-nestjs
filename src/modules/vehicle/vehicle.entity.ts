import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { BrandVehicle } from '../brand-vehicle/brand-vehicle.entity';
import { ColorVehicle } from '../color-vehicle/color-vehicle.entity';
import { ModelVehicle } from '../model-vehicle/model-vehicle.entity';
import { TypeVehicle } from '../type-vehicle/type-vehicle.entity';

@Entity('vehicles')
export class Vehicle extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', unique: true, nullable: false})
    chasi: string;

    @Column({type: 'int',nullable: false})
    passengerQuantity: number;

    @Column()
    idType: number;

    @Column()
    idBrand: number;

    @Column()
    idModel: number;

    @CreateDateColumn({type: 'timestamp', name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp', name: 'updated_at', select: false})
    updatedAt: Date;

    @DeleteDateColumn({type: 'timestamp', name: 'deleted_at', select: false })
    deletedAt: Date;

    @OneToOne(() => TypeVehicle, type => type.vehicle, {
        cascade: true,
        nullable: false,
        eager: true
    })
    @JoinColumn({referencedColumnName: "id", name: "idType"})
    type: TypeVehicle;

    @OneToOne(() => BrandVehicle, brand => brand.vehicle, {
        cascade: true,
        nullable: false,
        eager: true
    })
    @JoinColumn({referencedColumnName: "id", name: "idBrand"})
    brand: BrandVehicle;

    @OneToOne(() => ModelVehicle, model => model.vehicle, {
        cascade: true,
        nullable: false,
        eager: true
    })
    @JoinColumn({referencedColumnName: "id", name: "idModel"})
    model: ModelVehicle;


    @OneToMany(() => ColorVehicle, color => color.vehicle, {
        cascade: true,
        nullable: false,
        eager: true
    })
    @JoinColumn({referencedColumnName: "id"})
    colors: ColorVehicle[];
}