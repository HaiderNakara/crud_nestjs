import { CategoriesService } from './categories.service';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: Category): Promise<Category & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(Category & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<Category & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<Category & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
