import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import {Game} from "./game.model";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
  controllers: [GamesController],
  providers: [GamesService],
  imports: [
    SequelizeModule.forFeature([Game])
  ]
})
export class GamesModule {}
