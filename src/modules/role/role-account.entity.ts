import { BaseEntity, Column,  CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Account } from '../account/account.entity';
import { Role } from './role.entity';

@Entity('roles_account')
export class RoleAccount extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    idOwner: number;

    @Column()
    idRole: number;

    @CreateDateColumn({type: 'timestamp', name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp', name: 'updated_at', select: false})
    updatedAt: Date;

    @DeleteDateColumn({type: 'timestamp', name: 'deleted_at', select: false })
    deletedAt: Date;

    @ManyToOne(() => Account, account => account.roles)
    @JoinColumn({referencedColumnName: "id", name: "idOwner"})
    owner: Account;

    @ManyToOne(() => Role)
    @JoinColumn({referencedColumnName: "id", name: "idRole"})
    role: Role;
}