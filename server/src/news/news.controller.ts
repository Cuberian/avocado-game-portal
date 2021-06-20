import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {NewsService} from "./news.service";
import {CreateNewsDto} from "./dto/create-news.dto";

@Controller('news')
export class NewsController {

    constructor(private newsService: NewsService) {}

    @Post()
    create(@Body() dto: CreateNewsDto) {
        return this.newsService.createNews(dto)
    }

    @Get('/:id')
    getById(@Param('id') id: number) {
        return this.newsService.getNewsById(id)
    }

    @Get()
    getAll() {
        return this.newsService.getAllNews()
    }
}
