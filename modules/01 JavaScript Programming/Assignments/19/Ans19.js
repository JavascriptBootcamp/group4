let validateCreditCard = (cardNumber) =>{
    //check for iiligal dashes in card number
    let dashsStrArr = cardNumber.split('');
    let help = -1;
    for(let i=0; i<dashsStrArr.length; i++){
        if(dashsStrArr[i] === '-'){
            help+=5;
            if(i !== help){
                return {valid: false, number: cardNumber, error:"Illigal dashes"};
            }
        }
    }
    //remove dashes
    let cardStrArr = cardNumber.replace(/-/g,'').split('')
    //if 16 digits
    if(cardStrArr.length != 16)
        return {valid: false, number: cardNumber, error:"Wrong length"};
    ///if all numbers
     cardStrArr.forEach(elem => {
        if(typeof Number(elem) != 'number')        
            return {valid: false,number: cardNumber, error: "Card number contains letters"};
    });
    
    // if at least two different digits represented
    if(cardStrArr.every(elem => cardStrArr[0] === elem))
        return {valid: false,number: cardNumber, error:"Card is not represented with at least two different digits"};
    
    //if final even
    if( Number(cardStrArr[cardStrArr.length - 1]) % 2 != 0 )
        return {valid: false,number: cardNumber, error:"Final digit is odd"};

    //if sum of all the digit greater than 16
    if(cardStrArr.reduce((a,b) => Number(a) + Number(b), 0 ) <= 16)
        return {valid:false , number: cardNumber , error:"Sum of card digits is lesser then 16 "};
    
    return {valid:true , number: cardNumber};
}


//console.log(validateCreditCard("1234-1234-1234-1234"));

