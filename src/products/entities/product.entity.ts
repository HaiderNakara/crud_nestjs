import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document, SchemaTypes } from 'mongoose';
import { Category } from "src/categories/entities/category.entity";

@Schema()
export class Product extends Document {
  @Prop()
  id: string;
  @ApiProperty()
  @Prop()
  name: string;
  @ApiProperty()
  @Prop()
  description: string;
  @ApiProperty()
  @Prop()
  price: number;
  @ApiProperty()
  @Prop({ type: SchemaTypes.ObjectId, ref: Category.name })
  category: string;
}
export const ProductSchema = SchemaFactory.createForClass(Product);