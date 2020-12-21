import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Vehicle } from '../vehicle/vehicle.entity';

@Entity('types_vehicle')
export class TypeVehicle extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', unique: true, nullable: false})
    name: string;

    @CreateDateColumn({type: 'timestamp', name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp', name: 'updated_at', select: false})
    updatedAt: Date;

    @DeleteDateColumn({type: 'timestamp', name: 'deleted_at', select: false })
    deletedAt: Date;

    @OneToOne(() => Vehicle, vehicle => vehicle.type)
    @JoinColumn({referencedColumnName: "id"})
    vehicle: Vehicle;
}