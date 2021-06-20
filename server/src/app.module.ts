import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { NewsModule } from './news/news.module';
import { GamesModule } from './games/games.module';

import {News} from "./news/news.model";
import {Game} from "./games/game.model";
import {Role} from "./roles/role.model";
import {User} from "./users/user.model";
import { RatingsModule } from './ratings/ratings.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, News, Game],
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        NewsModule,
        GamesModule,
        RatingsModule,
    ]
})
export class AppModule {}
