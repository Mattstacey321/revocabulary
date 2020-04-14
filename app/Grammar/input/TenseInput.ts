import { InputType, Field } from "type-graphql";
import { Tense } from "../entities/TenseModel";
import { StructureType } from "../entities/structure/Structure";
import { ExampleInput } from "./exampleInput";
import { StructureInput } from "./structureInput";
import { ExampleType} from "../entities/example/example";

@InputType()
export class TenseInput implements Partial<Tense>{
    @Field()
    definition: String;
    @Field()
    type: String;
    @Field(() => [StructureInput])
    structure: StructureInput[];
    @Field(() => [ExampleInput])
    hint: ExampleInput[];
    @Field(() => [ExampleInput])
    usage: ExampleInput[];
    @Field(() => [ExampleInput])
    rule: ExampleInput [];

}