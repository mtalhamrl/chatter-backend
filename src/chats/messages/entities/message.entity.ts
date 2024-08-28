import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractEntity } from 'src/common/database/abstract.entity';

@ObjectType()
@Schema()
export class Message extends AbstractEntity {
  @Field()
  @Prop()
  content: string;

  @Field()
  @Prop()
  createAt: Date;

  @Field()
  @Prop()
  userId: string;
}

export const ChatSchema = SchemaFactory.createForClass(Message);
