import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: Product): Promise<Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(page?: number): Promise<Omit<Product & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findOne(id: string): Promise<Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
