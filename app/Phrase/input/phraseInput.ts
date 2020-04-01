import { InputType, Field } from "type-graphql";
import { Phrase } from "../entities/Phrase";

@InputType()
export class PhraseInput implements Partial<Phrase>{
    @Field()
    phrase:String;
    @Field()
    synonym:String[]
}