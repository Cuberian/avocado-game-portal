import { News } from "./news.model";
import { CreateNewsDto } from "./dto/create-news.dto";
export declare class NewsService {
    private newsRepository;
    constructor(newsRepository: typeof News);
    createNews(dto: CreateNewsDto): Promise<News>;
    getNewsById(id: number): Promise<News>;
    getAllNews(): Promise<News[]>;
}
