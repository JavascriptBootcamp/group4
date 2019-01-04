function Word(chars)
{
    this.setLength = function()
    {
       this.length = chars.length;
    }
}

function findLongestString(sentence)
{
    var wordsArray = sentence.split(' ');
    var wordsObjectArray = [];
    var longestWordIdx = 0;

    wordsArray.forEach(function(element)
    {
        var theWord = new Word(element);
        theWord.setLength(element);
        wordsObjectArray.push(theWord);
    });

    for(var i = 1; i < wordsObjectArray.length; i++)
    {
        if(wordsObjectArray[i].length > wordsObjectArray[longestWordIdx].length)
        {
            longestWordIdx = i;
        }
    }

    return wordsArray[longestWordIdx];
}

/*  MAIN    */

console.log(findLongestString('Web Development Tutorial'));
