import { InputType, Field } from "type-graphql";
import { Indiom } from "../identities/Indiom";

@InputType()
export class IndiomInput implements Partial<Indiom>{
    @Field()
    indiom:String;
    @Field()
    meaning_in_en:String;
    @Field()
    meaning_in_vi:String

}