import { ObjectType, Field } from "type-graphql";
import { prop, getModelForClass, index, plugin } from "@typegoose/typegoose";
import paginationPlugin, { PaginateModel } from 'typegoose-cursor-pagination';

@plugin(paginationPlugin)
@index({ indiom: 1 })
@ObjectType()
export class Indiom {
    @Field()
    @prop({ nullable: true })
    indiom: String;
    @Field()
    @prop({ nullable: true })
    meaning_in_vi: String;
    @Field()
    @prop({ nullable: true })
    meaning_in_en: String;
}
export const IndiomModel = getModelForClass(Indiom);