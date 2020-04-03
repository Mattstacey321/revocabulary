import { ObjectType, Field } from "type-graphql";
import { prop } from "@typegoose/typegoose";

@ObjectType()
export class WordType{
    @Field()
    @prop({ nullable: true })
    word:String;
    @Field()
    @prop({ nullable: true })
    type:String;
    @Field()
    @prop({ nullable: true })
    phonetic:String
    @Field()
    @prop({ nullable: true })
    example: String
}