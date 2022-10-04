import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from 'mongoose';

@Schema()
export class Category extends Document {
  @Prop()
  id: string;
  @ApiProperty()
  @Prop()
  name: string;
  @ApiProperty()
  @Prop()
  description: string;
}
export const CategorySchema = SchemaFactory.createForClass(Category);