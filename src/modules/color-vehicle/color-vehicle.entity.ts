import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Vehicle } from '../vehicle/vehicle.entity';

@Entity('colors_vehicle')
export class ColorVehicle extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', nullable: false})
    color: string;

    @Column()
    idVehicle: number;

    @CreateDateColumn({type: 'timestamp', name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp', name: 'updated_at', select: false})
    updatedAt: Date;

    @DeleteDateColumn({type: 'timestamp', name: 'deleted_at', select: false })
    deletedAt: Date;

    @ManyToOne(() => Vehicle, vehicle => vehicle.colors)
    @JoinColumn({referencedColumnName: "id", name: "idVehicle"})
    vehicle: Vehicle;
}