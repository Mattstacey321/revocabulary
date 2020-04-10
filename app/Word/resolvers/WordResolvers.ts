import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Request, Response, NextFunction } from "express";
import { IPaginateOptions } from "typegoose-cursor-pagination";
import { Words } from "../schema/Words";
import { WordsModel } from "../schema/Words";
import { WordInput } from "../input/WordInput";
import { fetch } from "cross-fetch";
import getAmericanVoice from "../services/getAmericaVoice";
import getPhonetic from "../services/getPhonetic";
import getExampleImage from "../services/getExampleImage";
import { PartOfSpeechInput } from '../input/partOfSpeechInput';
import { type } from "os";
import checkWordExist from "../services/checkWordExist";
import paginateWord from "../services/paginateWord";
import { pre } from "@typegoose/typegoose";
import { PaginateWord } from "../schema/PaginateWord";

@Resolver()
export class WordResolver {
    @Query(() => [Words])
    async returnAllWord() {
        return await WordsModel.find();
    }
    @Query(() => PaginateWord)
    async getWord(@Arg("next") next:string,@Arg("limit") limit: number,@Arg("previous") previous:string){
        
        var nextResult: string = "";
        var previousResult : string = "";
        console.log();
        const result  = (await paginateWord(limit, next, previous))
        return result
 
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