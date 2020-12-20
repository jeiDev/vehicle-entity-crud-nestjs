import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Account } from '../account/account.entity';


@Entity('access_token')
export class AccessToken extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', unique: true, nullable: false})
    token: string;

    @Column({type: 'varchar', default: 86400000})
    ttl: number;

    @CreateDateColumn({type: 'timestamp', name: 'created_at'})
    createdAt: Date;

    @ManyToOne(() => Account, account => account.accessToken)
    owner: Account;
}