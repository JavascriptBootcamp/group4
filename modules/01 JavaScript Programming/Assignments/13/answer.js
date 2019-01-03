var str1 = "abcda";

function isPalindrome(str){
    var count = 0;
    for(var i=0;i<(str.length/2); i++)
        if(str.charAt(i)===str.charAt(str.length-i-1))
            count++;

        if(count===Math.ceil(str.length/2))
            console.log("This string is a Palyndrome");    
        else
            console.log("This string is not a Palyndrome");

}

isPalindrome(str1);
