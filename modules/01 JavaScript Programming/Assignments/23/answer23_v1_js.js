
function Word(str){
    //this.length = 5;
    this.setLength = function(){
        this.length = str.length;
        console.log("i am Word", this.length);
    }

}

 var Obj = function() {
     //this.length =  10;
    this.setLength = function(){
    this.length = 10;
    console.log("i am Obj",this.length);
       }
 }
 
 var fun  = function(){
    this.length = 100;
     console.log(this.length);
     
 }

 

word1 = new Word("hii");
obj1 = new Obj();

//word1.setLength();
//obj1.setLength();

fun();

word1.setLength();
obj1.setLength();
fun.call(word1);
fun.call(obj1);
/* 
console.log("before "+ word1.length);
obj1.setLength.call(word1);
console.log("after "+ word1.length);
 */
