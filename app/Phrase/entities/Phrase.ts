import { ObjectType, Field } from "type-graphql";
import { prop, getModelForClass, plugin, index } from "@typegoose/typegoose";
import paginationPlugin, { PaginateModel } from 'typegoose-cursor-pagination';

@ObjectType()
@plugin(paginationPlugin)
@index({ phrase: 1 })
export class Phrase {
    @Field()
    @prop({ nullable: true })
    phrase: String;
    @Field()
    @prop({ nullable: true })
    word_type: String;
    @Field(()=>[String])
    @prop({ nullable: true })
    synonym: String[];
    @Field(() => [String])
    @prop({ nullable: true })
    meaning: String[];
    @Field()
    @prop({ nullable: true })
    example: String;
    
    
}
export const phraseModel = getModelForClass(Phrase) as PaginateModel<Phrase,typeof Phrase>;