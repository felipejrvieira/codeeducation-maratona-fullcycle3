import {Controller, Get, Post, Render, Req, Request} from '@nestjs/common';
import {Repository} from "typeorm";
import {Category} from "../category.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Controller('maratona')
export class CategoryController {

    constructor(
        @InjectRepository(Category)
        private categoryRepo: Repository<Category>
    ) {
    }

    @Get() //API Rest - JSON
    index() {
        return this.categoryRepo.find();
    }

    @Get('list')
    @Render('category_list')
    async category_list(){
        const categories = await this.categoryRepo.find();
        return {layout: false, categories};
    }
/*
    @Get('create')
    async category_create() {
        let category = await this.categoryRepo.create({name: 'DevOps e Containers: do Docker ao Kubernetes'});
        return this.categoryRepo.save(category);
    }
*/-
}
