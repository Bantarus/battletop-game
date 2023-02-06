import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BattlefieldDocument = HydratedDocument<Battlefield>;

@Schema()
export class Battlefield {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  tilesCount: number;
  
  // an array of each tile status starting from top left
  @Prop({required:true})
  grid: number[];

  @Prop()
  imageId: number;



}

export const BattlefieldSchema = SchemaFactory.createForClass(Battlefield);