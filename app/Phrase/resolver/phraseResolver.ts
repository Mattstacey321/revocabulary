import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Phrase, phraseModel } from "../entities/Phrase";
import { PhraseInput } from "../input/phraseInput";
import { PaginatePhrase } from "../entities/PaginatePhrase";
import paginateModel from "../../Service/paginateModel";
import { PaginateModel } from "typegoose-cursor-pagination";




@Resolver()
export class PhraseResolver {
    

    @Query(()=>[Phrase])
    async getAllPhrase() {
        return await phraseModel.find();
    }
    @Query(()=>PaginatePhrase)
    async fetchPhrase(@Arg("next") next: string, @Arg("limit") limit: number, @Arg("previous") previous: string) {

        var nextResult: string = "";
        var previousResult: string = "";
       
        const result = (await paginateModel(limit, next, previous, "phrase", phraseModel))
        return result

    }
    @Query(()=>[Phrase])
    async searchPhrase(@Arg("term") term:string){
        var phrase = new RegExp('^' + term , "i");
        return await phraseModel.aggregate([{$match:{"phrase": phrase}}])
    }
    @Mutation(() => Phrase)
    async createPhrase(@Arg("data") { phrase, synonym, example, meaning,word_type }: PhraseInput) {
        return phraseModel.create({
            word_type,
            phrase,
            synonym,
            example,
            meaning
        });
    }
}