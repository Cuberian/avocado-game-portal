import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {News} from "./news.model";
import {User} from "../users/user.model";
import {Tag} from "../tags/tag.model";
import {NewsTags} from "../tags/news-tags.model";

@Module({
  providers: [NewsService],
  controllers: [NewsController],
  imports: [
    SequelizeModule.forFeature([News, User, Tag, NewsTags])
  ]
})
export class NewsModule {}
