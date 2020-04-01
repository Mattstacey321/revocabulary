import { Words } from "../schema/Words";
import { WordInput } from "../input/WordInput";
export declare class WordResolver {
    returnAllWord(): Promise<import("@typegoose/typegoose").DocumentType<Words>[]>;
    createNewWord({ word, meaning, example, word_type }: WordInput): Promise<void>;
}
