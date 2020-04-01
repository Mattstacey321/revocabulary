import { InputType, Field } from "type-graphql";
import { Words } from "../schema/Words";

@InputType()
export class WordInput implements Partial<Words>{
    @Field()
    word: String;
    @Field()
    meaning: String;
    @Field()
    example: String;
    @Field()
    word_type:String
}