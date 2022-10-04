import { Model } from 'mongoose';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    create(createProductDto: Product): Promise<Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(page?: number): Promise<Omit<Product & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findOne(id: string): Promise<Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeByCategory(categoryId: string): Promise<import("mongodb").DeleteResult>;
}
