function validateCreditCard(number){
    var output = [],
    sNumber = number.toString(), //in case the input will be a number var instead of string
    counter = 0,
    sum=0;

    for(var i=0;i<sNumber.length;i++){
        if(sNumber.charAt(i)!=='-')
            output.push(+sNumber.charAt(i));
    }
    if(output.length!==16){
        var err = "Error: Wrong number of digits";
        var val = false;
        var obj = {valid: val, number: number, error: err}
        return(obj);
    }
    if(output[output.length-1]%2!==0){
        var err = "Error: Odd final number";
        var val = false;
        var obj = {valid: val, number: number, error: err}
        return(obj);
    }
    if(isNaN(output[output.length-1])){
        var err = "Error: Invalid characters";
        var val = false;
        var obj = {valid: val, number: number, error: err}
        return(obj);
    }
    sum+=output[output.length-1];
    for(var i=0;i<output.length-1;i++){
        sum+=output[i];
        if(output[i]===output[i+1])
            counter++;
    }
    if(counter===15){
        var err = "Error: All digits are the same";
        var val = false;
        var obj = {valid: val, number: number, error: err}
        return(obj);
    }
    if (sum<16){
        var err = "Error: Sum is less than 16";
        var val = false;
        var obj = {valid: val, number: number, error: err}
        return(obj);
    }
    
    var val = true;
    var obj = {
        valid: val,
        number: number
    }
    return(obj);
}

var number = "2222222222222222";
console.log(validateCreditCard(number));
