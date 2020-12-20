import { TypeOrmModule } from '@nestjs/typeorm'
import { Configuration } from 'src/config/config.keys'
import { ConfigModule } from 'src/config/config.module'
import { ConfigService } from 'src/config/config.service'
import { ConnectionOptions } from 'typeorm'
 
export const databaseProviders = [
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        async useFactory(config: ConfigService){
            return {
                type: config.get(Configuration.DB_TYPE),
                ssl: config.get(Configuration.DB_SSL) === "true",
                host: config.get(Configuration.DB_HOST),
                database: config.get(Configuration.DB_DATABASE),
                port: +config.get(Configuration.DB_PORT),
                username: config.get(Configuration.DB_USERNAME),
                password: config.get(Configuration.DB_PASSWORD),
                synchronize: config.get(Configuration.DB_SYNCHRONIZE) === "true",
                entities: [ 
                    `${__dirname}/../**/*.entity.{ts,js}`
                ],
                migrations: [
                    `${__dirname}/migrations/*.{ts,js}`
                ],
                cli: {
                    migrationsDir: `${__dirname}/migrations`
                }
            } as ConnectionOptions
        }
    })
]