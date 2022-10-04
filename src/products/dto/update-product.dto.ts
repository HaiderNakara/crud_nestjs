import { PartialType } from '@nestjs/swagger';
import { Product } from '../entities/product.entity';

export class UpdateProductDto extends PartialType(Product) { }
