import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { Indiom, IndiomModel } from "../identities/Indiom";
import paginateModel from "../../Service/paginateModel";
import { IndiomInput } from "../input/indiomInput";
import { PagnateIndiom } from "../identities/paginateIndom";

@Resolver()
export class IndiomResolvers{
    @Query(() => PagnateIndiom)
    async fetchIndiom(@Arg("next") next: string, @Arg("limit") limit: number, @Arg("previous") previous: string) {
        var nextResult: string = "";
        var previousResult: string = "";

        const result = (await paginateModel(limit, next, previous, "word", IndiomModel))
        return result;
    }
    @Mutation(()=>Indiom)
    async createIndiom(@Arg("input") input:IndiomInput){
        const indiom= await IndiomModel.create(input);
        return indiom;
    }
}