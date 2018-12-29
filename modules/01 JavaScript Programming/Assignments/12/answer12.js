function evenWords(str) {

    var strArr = str.split(" ");
    var str_even = "";
    for(var i=1;i<strArr.length;i=i+2){
         str_even += strArr[i] + " ";
    }
    return str_even;
    }

    var str = "aaa bbbb asda 1331 ewe";
    var evenStr = evenWords(str);
    console.log(evenStr);