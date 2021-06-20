import { Tag } from "./tag.model";
import { CreateTagDto } from "./dto/create-tag.dto";
export declare class TagsService {
    private tagRepository;
    constructor(tagRepository: typeof Tag);
    createTag(dto: CreateTagDto): Promise<Tag>;
    getByValue(value: string): Promise<Tag>;
    getAll(): Promise<Tag[]>;
}
