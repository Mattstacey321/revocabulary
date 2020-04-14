import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Phrase, phraseModel } from "../entities/Phrase";
import { PhraseInput } from "../input/phraseInput";


@Resolver()
export class PhraseResolver {
    

    @Query(()=>[Phrase])
    async getAllPhrase() {
        return await phraseModel.find();
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