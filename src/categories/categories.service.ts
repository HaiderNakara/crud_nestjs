import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductsService } from 'src/products/products.service';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
    protected readonly productsService: ProductsService,
  ) { }
  create(createCategoryDto: Category) {
    const id = Math.floor(1000 + Math.random() * 9000);
    const category = new this.categoryModel({ ...createCategoryDto, id });
    return category.save();
  }
  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryModel.findOneAndUpdate({ id }, updateCategoryDto,).exec();
  }
  findAll() {
    return this.categoryModel.find().exec();
  }
  findOne(id: string) {
    return this.categoryModel.findOne({ id }).exec();
  }
  async remove(id: string) {
    console.log(id);

    const cat = await this.categoryModel.findOne({ id }).exec();
    await this.productsService.removeByCategory(cat._id);
    return this.categoryModel.findOneAndDelete({ id }).exec()
  }

}
