import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Account } from '../account/account.entity';

@Entity('roles')
export class Role extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', unique: true, nullable: false})
    level: string;

    @Column()
    idOwner: number;

    @CreateDateColumn({type: 'timestamp', name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp', name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({type: 'timestamp', name: 'deleted_at'})
    deletedAt: Date;

    @ManyToOne(() => Account, account => account.roles)
    @JoinColumn({referencedColumnName: "id", name: "idOwner"})
    owner: Account;
}