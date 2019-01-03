function isPalindrom(str){
    var strArr = str.split('');
    var check1 = "";
    var check2 = "";
    for(var i=0;i<strArr.length; i++){
        check1 += strArr[i];
    }
    console.log(check2,"1");
    for(var i=str.length; i>-1 ; i--){
        check2 += strArr[i];
    }
    check2 = check2.replace('undefined','');
    return check1 === check2;
}
console.log(isPalindrom("abccba"));