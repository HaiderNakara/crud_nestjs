import { Injectable } from '@nestjs/common';
    import { InjectModel } from '@nestjs/mongoose';
    import { Model } from 'mongoose';
    import { UpdateCatDto } from './dto/update-cat.dto';
    import { Cat } from './entities/app.entity';
    
    @Injectable()
    export class AppService {
      constructor(
      @InjectModel(Cat.name) private readonly catModel: Model<Cat>,
      ) {} 
      getHello(): string {
        return 'Hello World!';
      }
      async createCat(cat: Cat): Promise<Cat> {
        const createdCat = new this.catModel(cat);
        return await createdCat.save();
      }
      async findAllCats(): Promise<Cat[]> {
        return await this.catModel.find().exec();
      }
    async findCatById(id: string): Promise<Cat> {
      return await this.catModel.findById(id).exec();
    }
    async updateCat(id: string, cat: UpdateCatDto): Promise<Cat> {
      return await this.catModel.findByIdAndUpdate(id, cat, { new: true }).exec();
    } 
    async deleteCat(id: string): Promise<Cat> {
      return await this.catModel.findByIdAndDelete(id).exec();
    }
    }
    