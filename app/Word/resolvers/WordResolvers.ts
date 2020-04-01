import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Words } from "../schema/Words";
import { WordsModel } from "../schema/Words";
import { WordInput } from "../input/WordInput";
import { fetch } from "cross-fetch";

@Resolver()
export class WordResolver {
    @Query(() => [Words])
    async returnAllWord() {
        return await WordsModel.find();
    }
    @Mutation(() => Words)
    async createNewWord(@Arg("data") { word, meaning, example, word_type }: WordInput) {
        var getPhonetic = `https://api.dictionaryapi.dev/api/v1/entries/en/${word}`;
       
        fetch(getPhonetic).then(async (v) => {
            var text = await v.text();
            var jsonParse = JSON.parse(text);
            var phonetic = jsonParse[0].phonetic

            return WordsModel.create({
                word,
                meaning,
                example, word_type,
                phonetic
            }).then((v) => {
                return v;
            }).catch((err) => {
                console.log(err);
            });
        }).catch((_) => {
            return "";
        })

    }
} 