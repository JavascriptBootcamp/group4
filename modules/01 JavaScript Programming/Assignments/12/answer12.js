function evenWords(str) {
   // var input= 'aaa bbbb  '
   // var strArr=input.split(' ');
   var strArr=str.split(' ');
    var strAns="";
    for(var i=1;i<=strArr.length;++i)
    {  

        if(i%2==0)
        {
            strAns+=strArr[i-1]+" ";
        }

    }
    console.log(strAns);
   return strAns;
  }
