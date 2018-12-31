function evenWords(str) {
    var strWords = str.split(" ");
    var newStr = '';
    for(var i=0;i<strWords.length;i++){
        if(i % 2 !== 0)
            newStr += strWords[i] + " ";
    }
    newStr = newStr.slice(0,newStr.length - 1);
    return newStr;
  }

  console.log(evenWords('aaa bbbb asda 1331 ewe'));

 // <p>Example input: <code>'aaa bbbb asda 1331 ewe'</code></p>
 // <p>Example output: <code>'bbbb 1331'</code></p>