import { ObjectType, Field } from "type-graphql";
import { prop, getModelForClass } from "@typegoose/typegoose";

@ObjectType()

export class Phrase {
    @Field()
    @prop({ nullable: true })
    phrase: String;
    @Field(()=>[String])
    @prop({ nullable: true })
    synonym: String[];
    
    
}
export const phraseModel = getModelForClass(Phrase);