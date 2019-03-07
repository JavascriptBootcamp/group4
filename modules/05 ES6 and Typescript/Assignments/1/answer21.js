const evenWords= (str) => {
    // var input= 'aaa bbbb  '
    // var strArr=input.split(' ');
    let strArr=str.split(' ');
    let strAns="";
     for(let i=1;i<=strArr.length;++i)
     {  
 
         if(i%2==0)
         {
             strAns+=`${strArr[i-1]} `;
         }
 
     }
     console.log(strAns);
    return strAns;
   }

   evenWords('aaa bbbb  ')
