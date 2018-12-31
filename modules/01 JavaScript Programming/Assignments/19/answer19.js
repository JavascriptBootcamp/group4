
function validateCreditCard (creditCard)
{
 //   var creditCard=9999777788880000;
    let arrayCreditCard = Array.from(creditCard.toString());
    let  answer={
        valid: false,
        number: creditCard,
        error: ""
    }
        
        // remove "-" from CreditCard number
    if(arrayCreditCard[4]==='-' && arrayCreditCard[9] === '-'  &&arrayCreditCard[14]==='-'   )
    {
        arrayCreditCard.splice(4, 1);
        arrayCreditCard.splice(8, 1);
        arrayCreditCard.splice(12, 1);

    }
   // console.log(arrayCreditCard);
  //  var strCreditCard=creditCard.toString();
    if(arrayCreditCard.length!=16)
    {
        answer["valid"]= false;
        answer["error"]= "wrong length";
        return answer;
    }
    if(arrayCreditCard[arrayCreditCard.length-1]%2!=0)
    {
        answer["valid"]= false;
        answer["error"]= "odd final number";
        return answer;
    }
   
    if(arrayCreditCard.every( function (digit)
    {
  
        return (digit.valueOf() >=0 && digit.valueOf()<10);
    })===false)
    {
        answer["valid"]= false;
        answer["error"]= "invalid characters";
        return answer;
    }
   
    if(arrayCreditCard.every( function (digit)
    {

        return arrayCreditCard[0]===digit;
    }))
    {
        
        answer["valid"]= false;
        answer["error"]= "invalid characters";
        return answer;
    }
    var sum=0;
    for(var i=0;i<arrayCreditCard.length;++i)
    {
        //second + is to convert string to a number 
        sum+=+arrayCreditCard[i].valueOf();
    }
    if(sum>16)
    {
        answer["valid"]= true;
        return answer;
    }
    else{
        answer["valid"]= false;
        answer["error"]= "sum less than 16";
        return answer;

    }
  


}
console.log(validateCreditCard("9999777788880000"));
console.log(validateCreditCard("9999-7777-8888-0000"));
console.log(validateCreditCard("6666-6666-6666-1666"));
console.log(validateCreditCard("6666666666661666"));
console.log(validateCreditCard("a92332119c011112"  ));
console.log(validateCreditCard(4444444444444444 ));
console.log(validateCreditCard(1111111111111110 ));
console.log(validateCreditCard(6666666666666661 ));


