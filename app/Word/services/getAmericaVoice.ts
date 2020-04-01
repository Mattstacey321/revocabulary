
const getAmericanVoice = (words:String) =>{
    var word = words.toLocaleLowerCase();
    var firstPlace :String = word[0];
    var secondPlace :String = word.substring(0,3) ?? word.substring(0,2);
    var thirdPlace :String;
    if(word.length < 5){
        var numberMissing = 5 - word.length;
        if (numberMissing > 0 && secondPlace.length == 3){
            secondPlace = secondPlace;
            thirdPlace = word + "__";
        }
        if(numberMissing > 0 && numberMissing == 3){
            secondPlace  =secondPlace + '_';
            thirdPlace = word + "___";
        }
        if (numberMissing > 0 && numberMissing == 4) {
            secondPlace = secondPlace + '_';
            thirdPlace = word + "____";
        }
        

    }
    else if(word.length >= 5){
        secondPlace = secondPlace;
        thirdPlace = word.substring(0, 5);
    }
    console.log(firstPlace ,secondPlace , thirdPlace);
    
    var link = `https://dictionary.cambridge.org/vi/media/english/us_pron/${firstPlace}/${secondPlace}/${thirdPlace}/${word}.mp3`;
    return link;
    
}
export default getAmericanVoice;