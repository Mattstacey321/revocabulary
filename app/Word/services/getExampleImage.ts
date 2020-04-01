import {fetch } from 'cross-fetch';

const getExampleImage  = async (word:String,number:Number) =>{
    var url = `https://craw-image-google.glitch.me/${word}/${number}`
    var result = fetch(url).then(async (v)=>{
        var text = await v.text();
        var toJson = JSON.parse(text);
        console.log(toJson);
        
        return toJson.image_url[0]
    }).catch((err)=>{
        console.log(err);
        
        return "";
    })
    return result; 
}
export default getExampleImage;