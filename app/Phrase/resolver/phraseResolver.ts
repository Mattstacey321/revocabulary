import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Phrase, phraseModel } from "../entities/Phrase";
import { PhraseInput } from "../input/phraseInput";


@Resolver()
export class WordResolver {

    @Query(()=>[Phrase])
    async getAllPhrase() {
        return await phraseModel.find();
    }

    @Mutation(()=>Phrase)
    async createPhrase(@Arg("data"){phrase,synonym}:PhraseInput){
        return phraseModel.create({
            phrase,
            synonym
        });
    }

}