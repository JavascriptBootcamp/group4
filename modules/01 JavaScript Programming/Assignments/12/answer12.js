//Write a function that given a string of words, returns a string composed of the even words (1-based) from the original string

var evenString = evenWords("1   222   333   444   fff  aaa");
console.log(evenString);

function evenWords(str) {

    var myStr = str.replace(/\s\s+/g, ' '); //remove whitespaces. \s \s+ is a regex.
    var stringArray = myStr.split(" ");
    var evenString = "";

    for (var i = 1; i < stringArray.length; i += 2) {
        evenString += stringArray[i];
        evenString += " ";
    }

    return evenString;
}