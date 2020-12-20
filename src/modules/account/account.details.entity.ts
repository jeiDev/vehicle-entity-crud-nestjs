import { DeleteDateColumn, UpdateDateColumn, CreateDateColumn, BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Account } from './account.entity';

@Entity('accounts_details')
export class AccountDetails extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 100, nullable: false})
    firstName: string;

    @Column({type: 'varchar', length: 100, nullable: false})
    lastName: string;

    @Column()
    idOwner: number;

    @CreateDateColumn({type: 'timestamp', name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp', name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({type: 'timestamp', name: 'deleted_at'})
    deletedAt: Date;

    @OneToOne(() => Account)
    @JoinColumn({referencedColumnName: "id", name: "idOwner"})
    owner: Account;
}