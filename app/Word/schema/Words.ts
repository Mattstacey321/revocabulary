import { ObjectType, Field} from "type-graphql";
import { getModelForClass, prop, index,plugin, mongoose} from "@typegoose/typegoose";
import { WordType } from "./WordType";
import paginationPlugin, { PaginateModel } from 'typegoose-cursor-pagination';


@plugin(paginationPlugin)
@index({ word: 1 })
@ObjectType()
export class Words {
    @Field()
    @prop()
    _id: String;

    @Field()
    @prop({ nullable: true })
    word: String;

    @Field(() => [String])
    @prop({ nullable: true })
    meaning: String[];

    @Field(() => [String])
    @prop({ nullable: true })
    example: String[];

    @Field()
    @prop({ nullable: true })
    phonetic: String;

    @Field(() => String)
    @prop({ nullable: true })
    word_type: String;

    @Field(() => String)
    @prop({ nullable: true })
    audio: String;

    @Field(() => String)
    @prop({ nullable: true })
    image_example: String;

    @Field(() => [String])
    @prop({ nullable: true })
    synonym: String[];

    @Field(() => [WordType])
    @prop({ nullable: true })
    partOfSpeech: WordType[]

    @Field()
    @prop({ nullable: true })
    next: String
    @Field()
    @prop({ nullable: true })
    previous: String
}

export const WordsModel = getModelForClass(Words) as PaginateModel<Words, typeof Words>;
