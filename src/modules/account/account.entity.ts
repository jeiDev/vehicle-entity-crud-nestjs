import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { AccessToken } from '../access-token/access-token.entity';
import { AccountDetails } from './account.details.entity';

@Entity('accounts')
export class Account extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', unique: true, nullable: false})
    email: string;

    @Column({type: 'varchar', nullable: false})
    password: string;

    @Column({type: 'boolean', default: true})
    status: boolean;

    @CreateDateColumn({type: 'timestamp', name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp', name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({type: 'timestamp', name: 'deleted_at'})
    deletedAt: Date;

    @OneToOne(type => AccountDetails, {
        cascade: true,
        nullable: false,
        eager: true
    })
    @JoinColumn({name: 'detail_id'})
    details: AccountDetails;

    @OneToMany(() => AccessToken, accessToken => accessToken.owner, {
        cascade: true,
        nullable: false,
        eager: true
    })
    accessToken: AccessToken[];
}