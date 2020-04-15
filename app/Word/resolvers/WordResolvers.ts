import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Words } from "../schema/Words";
import { WordsModel } from "../schema/Words";
import { WordInput } from "../input/WordInput";
import getAmericanVoice from "../services/getAmericaVoice";
import getPhonetic from "../services/getPhonetic";
import getExampleImage from "../services/getExampleImage";
import { PartOfSpeechInput } from '../input/partOfSpeechInput';
import checkWordExist from "../services/checkWordExist";
import { PaginateWord } from "../schema/PaginateWord";
import paginateModel from "../../Service/paginateModel";
import {IPaginateModel, PaginateModel} from 'typegoose-cursor-pagination';
@Resolver()
export class WordResolver {

    @Query(() => PaginateWord)
    async fetchWords(@Arg("next") next:string,@Arg("limit") limit: number,@Arg("previous") previous:string){
        
        var nextResult: string = "";
        var previousResult : string = "";
        console.log();
        const result = (await paginateModel(limit, next, previous, "word", WordsModel))
        return result
 
    }
    @Query(()=>Words)
    async getWord(@Arg("wordID") wordID:string){
        var result  = await WordsModel.findOne({"_id":wordID});
        console.log(result);
        
        return result;
    }

    @Query(() => String)
    async getVoice(@Arg("word") word: string) {
        return getAmericanVoice(word);

    }
    @Mutation(() => String)
    async createNewWord(
        @Arg("data") { word, meaning, example, word_type, synonym }: WordInput,
        @Arg("numberOfImage") number: number,
        @Arg("partOfSpeech", type => [PartOfSpeechInput]) partOfSpeech: PartOfSpeechInput[]) {

        
        if(await checkWordExist(word) == true){
            return "Word is exist. Try another word";
        }
        else{
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
                image_example,
                partOfSpeech
            }).then((_) => {
                return "OK";
            }).catch((err) => {
                console.log(err);
                return "Fail"
                
            });
        }
        


    }
} 