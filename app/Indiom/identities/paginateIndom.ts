import { Field, ObjectType } from "type-graphql";
import { prop } from "@typegoose/typegoose";
import { Indiom } from "./Indiom";

@ObjectType()
export class PagnateIndiom {
    @Field(() => [Indiom])

    docs: Indiom[];
    @Field()

    next: String;
    @Field()
    previous: String;
}