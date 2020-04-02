import { InputType, Field } from "type-graphql";
import { WordType } from "../schema/WordType";

@InputType()
export class PartOfSpeechInput implements Partial<WordType>{
    @Field()
    word: String

    @Field()
    type: String;

    @Field()
    phonetic: String;

    @Field()
    meaning:String;
}