import { ObjectType, Field } from "type-graphql";
import {Words} from '../schema/Words';

@ObjectType()
export class PaginateWord{
    @Field(()=>[Words])
    docs: Words[];
    @Field()
    next:String;
    @Field()
    previous: String;

}