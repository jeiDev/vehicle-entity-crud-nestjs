import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('vehicles')
export class Vehicles extends BaseEntity{

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

    @UpdateDateColumn({type: 'timestamp', name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({type: 'timestamp', name: 'deleted_at'})
    deletedAt: Date;
}