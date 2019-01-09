function RandomWord(chars){
    
    this.length;
    this.flag = 0;

    if (!Array.isArray(chars)){
        this.flag = 1;
        console.log('"chars" should be an array');
    }else{
        chars.forEach(element => {
            if(typeof(element) !== "string"){
                this.flag = 1;
                console.log('"chars" should include only strings');
            }
        });
    }
    this.randomize = function(length){

        if(typeof(length) !== "number"){
            this.flag = 1;
            console.log('"length" should be a number');
        }
        var newStr = "";
        for(var i=0; i<length; i++){
            var index = Math.floor(Math.random() * chars.length);
            newStr += chars[index];
        }
        return newStr;
    }
}

//var chars = [2,'r']; //error
//var chars = "hello"; //error
var chars = ['a','b','g','u'];
var word = new RandomWord(chars);
//var length = "g";  //error
var length = 6;
if(!word.flag){
        var result = word.randomize(length);
        console.log(result);
}
