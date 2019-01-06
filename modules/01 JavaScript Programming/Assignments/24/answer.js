function RandomWord(chars) {  // chars is array of strings/chars
    
        this.randomize = function (lengthNum)  {
            var resStr = '';
            var randVal;
    
            if (lengthNum <= 0) return 'ERROR: YOU MUST PASS A POSITIVE NUMBER AS A PARAMETERS!'
    
            for (var i = 0; i < lengthNum; i++) {
                //Math.random();  // 0 to 1 not including 1
                randVal = Math.floor( (Math.random() * chars.length)  );
    
                resStr += chars[randVal];
    
            }
    
            return resStr;
        }
    }
    
    
    
    var word = new RandomWord(['a','b','c']);
    var result = word.randomize(3);
    console.log(result); 
    
    
