import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from 'mongoose';

@Schema()
export class Cat extends Document {
  @ApiProperty()
  @Prop()
  name: string;
  @ApiProperty()
  @Prop()
  age: number;
  @ApiProperty()
  @Prop()
  breed: string;
  @ApiProperty()
  @Prop()
  color: string;
  @ApiProperty()
  @Prop()
  weight: number;
}

export const CatSchema = SchemaFactory.createForClass(Cat);