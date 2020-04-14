import { ObjectType, Field } from "type-graphql";
import { prop, getModelForClass } from "@typegoose/typegoose";
import { StructureType } from "./structure/Structure";
import { ExampleType } from "./example/example";

@ObjectType()
export class Tense{
    @Field()
    @prop({ nullable: true })
    type: String;
    @Field()
    @prop({ nullable: true })
    definition: String;
    @Field(() => [StructureType])
    @prop({ nullable: true })
    structure: StructureType[];
    @Field(()=>[ExampleType])
    @prop({ nullable: true })
    usage: ExampleType[]
    @Field(() => [ExampleType])
    @prop({ nullable: true })
    hint: ExampleType[]
    // add es,s, etc depend on which type of
    @Field(() => [ExampleType])
    @prop({ nullable: true })
    rule: ExampleType[]
}
export const TenseModel = getModelForClass(Tense);