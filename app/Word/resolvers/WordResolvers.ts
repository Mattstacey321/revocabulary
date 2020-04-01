import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Words } from "../schema/Words";
import { WordsModel } from "../schema/Words";
import { WordInput } from "../input/WordInput";
import { fetch } from "cross-fetch";
import getAmericanVoice from "../services/getAmericaVoice";
import getPhonetic from "../services/getPhonetic";
import getExampleImage from "../services/getExampleImage";

@Resolver()
export class WordResolver {
    @Query(() => [Words])
    async returnAllWord() {
        return await WordsModel.find();
    }
    @Query(() => String)
    async getVoice(@Arg("word") word: string) {
        return getAmericanVoice(word);

    }
    @Mutation(() => Words)
    async createNewWord(
        @Arg("data") { word, meaning, example, word_type ,synonym}: WordInput,
        @Arg("numberOfImage") number: number) {

        var phonetic = await getPhonetic(word);
        var audio = getAmericanVoice(word);
        var image_example = await getExampleImage(word, number);
        return WordsModel.create({
            word,
            synonym,
            meaning,
            example,
            word_type,
            phonetic,
            audio,
            image_example
        }).then((v) => {
            return v;
        }).catch((err) => {
            console.log(err);
        });


    }
} 