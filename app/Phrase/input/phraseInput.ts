import { InputType, Field } from "type-graphql";
import { Phrase } from "../entities/Phrase";

@InputType()
export class PhraseInput implements Partial<Phrase>{
    @Field()
    word_type:String
    @Field()
    phrase:String;
    @Field(()=>[String])
    synonym:String[];
    @Field(() => [String])
    meaning:String[];
    @Field()
    example:String
}