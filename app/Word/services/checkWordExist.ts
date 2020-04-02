import { WordsModel } from "../schema/Words";

const checkWordExist = async (word: String): Promise<Boolean>=>{
    var result: Number = await WordsModel.findOne({ word: word}).countDocuments();
    
    return result == 0 ? false :true ;
}
export default checkWordExist;