import { NewsService } from "./news.service";
import { CreateNewsDto } from "./dto/create-news.dto";
export declare class NewsController {
    private newsService;
    constructor(newsService: NewsService);
    create(dto: CreateNewsDto): Promise<import("./news.model").News>;
    getById(id: number): Promise<import("./news.model").News>;
    getAll(): Promise<import("./news.model").News[]>;
}
