import { PartialType } from '@nestjs/swagger';
import { Category } from '../entities/category.entity';

export class UpdateCategoryDto extends PartialType(Category) { }
