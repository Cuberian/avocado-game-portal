import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Tag} from "./tag.model";
import {CreateTagDto} from "./dto/create-tag.dto";

@Injectable()
export class TagsService {

    constructor(@InjectModel(Tag) private tagRepository: typeof Tag) {}

    async createTag(dto: CreateTagDto) {
        return await this.tagRepository.create(dto);
    }

    async getByValue(value: string) {
        return await this.tagRepository.findOne({ where: { value } })
    }

    async getAll() {
        return await this.tagRepository.findAll()
    }
}
