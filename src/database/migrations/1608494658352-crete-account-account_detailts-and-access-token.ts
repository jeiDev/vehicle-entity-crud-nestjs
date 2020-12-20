import {MigrationInterface, QueryRunner} from "typeorm";

export class creteAccountAccountDetailtsAndAccessToken1608494658352 implements MigrationInterface {
    name = 'creteAccountAccountDetailtsAndAccessToken1608494658352'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `accounts_details` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL");
        await queryRunner.query("ALTER TABLE `accounts` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL");
        await queryRunner.query("ALTER TABLE `access_token` DROP FOREIGN KEY `FK_ded5919aca12b05c7cac72126bc`");
        await queryRunner.query("ALTER TABLE `access_token` CHANGE `ownerId` `ownerId` int NULL");
        await queryRunner.query("ALTER TABLE `access_token` ADD CONSTRAINT `FK_ded5919aca12b05c7cac72126bc` FOREIGN KEY (`ownerId`) REFERENCES `accounts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `access_token` DROP FOREIGN KEY `FK_ded5919aca12b05c7cac72126bc`");
        await queryRunner.query("ALTER TABLE `access_token` CHANGE `ownerId` `ownerId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `access_token` ADD CONSTRAINT `FK_ded5919aca12b05c7cac72126bc` FOREIGN KEY (`ownerId`) REFERENCES `accounts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `accounts` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `accounts_details` CHANGE `deleted_at` `deleted_at` timestamp(6) NULL DEFAULT 'NULL'");
    }

}
