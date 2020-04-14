import { Field, InputType } from "type-graphql";
import { StructureType } from "../entities/structure/Structure";
@InputType()
export class StructureInput implements Partial<StructureType>{
    @Field()
    type:String;
    @Field()
    formula:String;
    @Field(()=>[String])
    note: String[]

}