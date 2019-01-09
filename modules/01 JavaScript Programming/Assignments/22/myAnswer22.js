function StringUtils (){
//getvowels
   this.getVowels=function(s){
        var vowelsArr =['a','u','e','i','o'];
        var i=0,sum=0;
            while(i<5){
                sum+=  s.split(vowelsArr[i]).length-1;
                i++;
           }
            console.log(sum);
    }
//removechar
    this.removeChar=function(str, pos){
                   console.log( str.slice(0,pos)+str.slice(pos+1,str.length));
       }
    //incrementLetters
    this.incrementLetters=function(str){
                 var str2="";   
        for(var i=0;i<str.length;i++){
            switch(str[i]){

                case 'a':str2[i]='z';
                case 'z':str2[i]='a';
                default:str2[i]=str.fromCharCode(str.CharCodeAt(0)+1);  
            }
        }
        console.log(str2);
    }
   
}
var text1=new StringUtils();
text1.getVowels("Hello there is 12 vowels in this sentence!!");
text1.removeChar("Hello remove M in this sentence!",13);
text1.incrementLetters("abcdefz");
