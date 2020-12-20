import { DeleteDateColumn, UpdateDateColumn, CreateDateColumn, BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('accounts_details')
export class AccountDetails extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 100, nullable: false})
    firstName: string;

    @Column({type: 'varchar', length: 100, nullable: false})
    lastName: string;

    @CreateDateColumn({type: 'timestamp', name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp', name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({type: 'timestamp', name: 'deleted_at'})
    deletedAt: Date;
}