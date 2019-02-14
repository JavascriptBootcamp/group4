

var RandomWord = function (chars) {

    this.randomize = function (length) {

        var errors = [];
        if (!Array.isArray(chars))
            //return console.error('"chars" should be an array');
            errors.push('"chars" should be an array');
        if (isNaN(length))
            errors.push('length" should be a number');
        if((Array.isArray(chars))){
        var isString  = chars.some( function(val){
          return typeof val != string;
       })
        
       if(isString)
          errors.push(' "chars" should include only strings.')
    }
        
        if(errors.length > 0)
          return console.error(errors);

        var randomString = "";

        for (var i = 0; i < length; i++) {

            randomString = randomString + chars[Math.floor((Math.random() * chars.length))];
        }

        return randomgitString;

    }
}

var word = new RandomWord(['a',3,'g','u']);
//var word = new RandomWord(77);


var result = word.randomize(2);

console.log(result);

