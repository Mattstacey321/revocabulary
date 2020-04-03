import { ObjectType, Field } from "type-graphql";
import { prop, getModelForClass } from "@typegoose/typegoose";

@ObjectType()

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
export const phraseModel = getModelForClass(Phrase);