import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEnum } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  password: string;


}

export const UserSchema = SchemaFactory.createForClass(User);