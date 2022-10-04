import { Model } from 'mongoose';
import { ProductsService } from 'src/products/products.service';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
export declare class CategoriesService {
    private readonly categoryModel;
    protected readonly productsService: ProductsService;
    constructor(categoryModel: Model<Category>, productsService: ProductsService);
    create(createCategoryDto: Category): Promise<Category & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(Category & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<Category & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<Category & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
