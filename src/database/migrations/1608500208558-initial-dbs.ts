import {MigrationInterface, QueryRunner} from "typeorm";

export class initialDbs1608500208558 implements MigrationInterface {
    name = 'initialDbs1608500208558'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `roles` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL");
        await queryRunner.query("ALTER TABLE `roles_account` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL");
        await queryRunner.query("ALTER TABLE `accounts_details` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL");
        await queryRunner.query("ALTER TABLE `accounts` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL");
        await queryRunner.query("ALTER TABLE `brands_vehicle` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL");
        await queryRunner.query("ALTER TABLE `colors_vehicle` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL");
        await queryRunner.query("ALTER TABLE `models_vehicle` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL");
        await queryRunner.query("ALTER TABLE `types_vehicle` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL");
        await queryRunner.query("ALTER TABLE `vehicles` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL");
        await queryRunner.query("ALTER TABLE `roles_account` ADD CONSTRAINT `FK_fde1467603b6c61342dc1f660b9` FOREIGN KEY (`idRole`) REFERENCES `roles`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `accounts_details` ADD CONSTRAINT `FK_cacf728cf6388e9a42870eec30b` FOREIGN KEY (`idOwner`) REFERENCES `accounts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `accounts` ADD CONSTRAINT `FK_c68d9c16ba83ad986f698dd9516` FOREIGN KEY (`detailsId`) REFERENCES `accounts_details`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `accounts` DROP FOREIGN KEY `FK_c68d9c16ba83ad986f698dd9516`");
        await queryRunner.query("ALTER TABLE `accounts_details` DROP FOREIGN KEY `FK_cacf728cf6388e9a42870eec30b`");
        await queryRunner.query("ALTER TABLE `roles_account` DROP FOREIGN KEY `FK_fde1467603b6c61342dc1f660b9`");
        await queryRunner.query("ALTER TABLE `vehicles` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `types_vehicle` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `models_vehicle` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `colors_vehicle` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `brands_vehicle` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `accounts` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `accounts_details` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `roles_account` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `roles` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL DEFAULT 'NULL'");
    }

}
