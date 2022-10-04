import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) { }
  create(createProductDto: Product) {
    const id = Math.floor(1000 + Math.random() * 9000);
    const product = new this.productModel({ ...createProductDto, id });
    return product.save();
  }
  async update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.findOneAndUpdate({ id }, updateProductDto).exec();
  }
  // optional page number
  findAll(page?: number) {
    if (page) {
      return this.productModel
        .find()
        .skip(10 * (page - 1))
        .limit(10)
        .populate('category')
        .exec();
    }
    return this.productModel.find().populate('category').exec();
  }
  findOne(id: string) {
    return this.productModel.findOne({ id }).populate('category').exec();
  }
  remove(id: string) {
    console.log(id);

    return this.productModel.findOneAndDelete({ id }).exec();

  }
  removeByCategory(categoryId: string) {
    return this.productModel.deleteMany({ category: categoryId }).exec();
  }
}
