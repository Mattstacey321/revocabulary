import { InputType, Field } from "type-graphql";
import { Words } from "../schema/Words";
import { WordType } from "../schema/WordType";
import { PartOfSpeechInput } from "./partOfSpeechInput";

@InputType()
export class WordInput implements Partial<Words>{
    @Field()
    word: String;
    @Field(()=>[String])
    meaning: [String];
    @Field(() => [String])
    example: [String];
    @Field()
    word_type:String
    @Field(() => [String])
    synonym: [String];
    @Field(() => [PartOfSpeechInput])
    partOfSpeech: [PartOfSpeechInput];
}