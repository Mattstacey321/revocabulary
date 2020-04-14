import { ObjectType, Field } from "type-graphql";
import { prop } from "@typegoose/typegoose";

@ObjectType()
export class StructureType {
    //possitive or negative
    @Field()
    @prop({ nullable: true })
    type: String;

    @Field()
    @prop({ nullable: true })
    formula: String;
    //for user note
    @Field(() => [String])
    @prop({ nullable: true })
    note: String[]
}