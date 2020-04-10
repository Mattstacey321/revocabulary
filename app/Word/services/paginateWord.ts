import { WordsModel, Words } from "../schema/Words";
import { IPaginateOptions, IPaginateResult } from "typegoose-cursor-pagination";

const paginateWord = (limit: number,next: string,previous: string) => {
    const options: IPaginateOptions = {
        sortField: "word",
        sortAscending: true,
        limit: limit,
        next: next,
        previous: previous
    };
    var result = ( WordsModel.findPaged(options, {}));
    return result
}
export default paginateWord;