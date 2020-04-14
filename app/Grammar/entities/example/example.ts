import { ObjectType, Field } from "type-graphql";
import { prop } from "@typegoose/typegoose";

@ObjectType()
export class ExampleType {
    @Field()
    @prop({ nullable: true })
    title: String
    @Field(() => [String])
    @prop({ nullable: true })
    content: String[];
    @Field(()=>[String])
    @prop({ nullable: true })
    example: String[]
    

}