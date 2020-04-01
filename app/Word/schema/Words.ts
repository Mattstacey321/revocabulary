import { ObjectType, Field } from "type-graphql";
import { getModelForClass, prop } from "@typegoose/typegoose";

@ObjectType()
export class Words {
    @Field()
    @prop({ nullable: true })
    word: String;
    @Field()
    @prop({ nullable: true })
    meaning: String;
    @Field()
    @prop({ nullable: true })
    example: String;
    @Field()
    @prop({ nullable: true })
    phonetic: String;
    @Field(()=>String)
    @prop({ nullable: true })
    word_type: String;
}
export const WordsModel = getModelForClass(Words);
