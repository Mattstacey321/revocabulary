import { ObjectType, Field } from "type-graphql";
import { Phrase } from "./Phrase";

@ObjectType()
export class PaginatePhrase {
    @Field(() => [Phrase])
    docs: Phrase[];
    @Field()
    next: String;
    @Field()
    previous: String;

}