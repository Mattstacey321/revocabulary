import { ObjectType, Field } from "type-graphql";
import { getModelForClass, prop, index, plugin, mongoose } from "@typegoose/typegoose";

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