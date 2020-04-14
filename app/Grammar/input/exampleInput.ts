import { InputType, Field } from "type-graphql";
import { Tense } from "../entities/TenseModel";
import { ExampleType } from "../entities/example/example";

@InputType()
export class ExampleInput implements Partial<ExampleType>{
    @Field()
    title: String
    @Field(() => [String])
    content: String[];
    @Field(()=>[String])
    example: String[]
    
}