import { Words } from "../schema/Words";
export declare class WordInput implements Partial<Words> {
    word: String;
    meaning: String;
    example: String;
    word_type: String;
}
