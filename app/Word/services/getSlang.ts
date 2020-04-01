import {fetch} from "cross-fetch";
    import { format } from "url";
const getSlang = (word:string) =>{
    var definition = "";
    var url = `http://urbanscraper.herokuapp.com/search/${word}`;
   
        fetch(url).then( async (v) => {
            var text = await v.text();
            var result = JSON.parse(text);
            return result[0].definition;
        }).catch((err)=>{
            return definition;
        })
   
}
export default getSlang;