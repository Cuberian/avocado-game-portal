import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {News} from "./news.model";
import {CreateNewsDto} from "./dto/create-news.dto";

@Injectable()
export class NewsService {

    constructor(@InjectModel(News) private newsRepository: typeof News) {}

    async createNews(dto: CreateNewsDto) {
        return await this.newsRepository.create(dto);
    }

    async getNewsById(id: number) {
        return await this.newsRepository.findByPk(id)
    }

    async getAllNews() {
        return await this.newsRepository.findAll()
    }

    async setCover(newsId: number, coverImage: string) {
        const news = await this.newsRepository.findByPk(newsId)
        return await news.update({'coverImage': coverImage})
    }
}
