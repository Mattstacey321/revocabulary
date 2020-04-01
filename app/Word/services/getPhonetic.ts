import {fetch} from "cross-fetch";
const getPhonetic = async (word:String) =>{
    var getPhonetic = `https://api.dictionaryapi.dev/api/v1/entries/en/${word}`;

        var result = await fetch(getPhonetic).then(async (v) => {
            var text = await v.text();
            var jsonParse = JSON.parse(text);
            var phonetic = jsonParse[0].phonetic
            return phonetic
        })
        return result;
    

}
export default getPhonetic;