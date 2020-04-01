import { ObjectType, Field } from "type-graphql";
import { getModelForClass, prop } from "@typegoose/typegoose";

@ObjectType()
export class Words {
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
}
export const WordsModel = getModelForClass(Words);
