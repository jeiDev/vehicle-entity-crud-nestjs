import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { AccessToken } from '../access-token/access-token.entity';
import { RoleAccount } from '../role/role-account.entity';
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

    @UpdateDateColumn({type: 'timestamp', name: 'updated_at', select: false})
    updatedAt: Date;

    @DeleteDateColumn({type: 'timestamp', name: 'deleted_at', select: false })
    deletedAt: Date;

    @OneToOne(() => AccountDetails, {
        cascade: true,
        nullable: false,
        eager: true
    })
    @JoinColumn({referencedColumnName: "id"})
    details: AccountDetails;

    @OneToMany(() => AccessToken, accessToken => accessToken.owner, {
        cascade: true,
        nullable: false,
        eager: true
    })
    @JoinColumn({referencedColumnName: "id"})
    accessToken: AccessToken[];

    @OneToMany(() => RoleAccount, roleAccount => roleAccount.owner, {
        cascade: true,
        nullable: false,
        eager: true
    })
    @JoinColumn({referencedColumnName: "id"})
    roles: RoleAccount[];
}