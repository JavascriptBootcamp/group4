function RandomWord(chars){
    if(typeof(chars) !== 'object' ){
        return console.log("chars should be an array");
    }
    chars.forEach(elem =>{
        if(typeof elem === 'number')
            return console.log("chars should include only strings");
    })

    this.chars = chars;

    this.randomize = (length) => {
        if(typeof(length) !== 'number'){
            return console.log("length should be a number");
        }
            var str = "";
            for(var i=0;i<length;i++){
                str += this.chars[Math.floor(Math.random() * this.chars.length)]
            }
            return str;
        }
    }

    

// var word = new RandomWord(['s',5]);
// var result = word.randomize('d');
// console.log(result);
