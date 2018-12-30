function concatEvenWords(theStr)
{
    var removedDuplicateWhitespacesStr = theStr.replace(/\s+/g, ' ').trim();

    var splitedString = removedDuplicateWhitespacesStr.split(" ");
    
    var evenWordsStr = "";
    
    for(var i = 0; i < splitedString.length; i += 2)
    {
        evenWordsStr += splitedString[i];
        evenWordsStr += " ";
    }
    
    return evenWordsStr;
}

console.log(concatEvenWords("Removing    haha a yabadabadu duplicates asldkasl whitespaces dssdsds from aaaaa   string dkslkl is aaaaa very ddddd cool!!!!   "))
