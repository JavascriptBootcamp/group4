var returnObj = {valid: true, number: '9923-3211-9901-1112', error: ''};
var arr;
var lastString;
function validateCreditCard(str){
    lastString = str;
    if(str.includes('-')){
        arr = str.split('-');// changed from ''
        //console.log(arr);
        var check = arr.every((value, i) => {// check if all the string is consisted from digits
            return arr.length === 4 && value.length === 4;
        });
        if(!check){
            return 'not enough dashes or a wrong length';
        }
        var strRemovedDashes = arr.reduce((subStr, y) => {
            return subStr + y;
        });
        arr = strRemovedDashes.split('');
    }else {
        arr = str.split('');
        if(arr.length !== 16){
            return 'wrong length';
        }
    }
    
    check = arr.every((value) => {// check if all the string is consisted from digits
        return Number.isInteger(parseInt(value));
    });
    if(!check){
        return 'found a NaN character';
    }
    check = arr.some((value) => {
        return arr[0] !== value;
    });
    if(!check){
        return 'all the digits are the same';
    }
    if(arr[arr.length -1] % 2 !== 0){
        return 'last digit is an odd number';
    }
    var sum = arr.reduce((total, y) => {
        return parseInt(total) + parseInt(y);
    });
    //console.log('sum:',sum);
    if(sum <= 16){
        return 'sum of digits <= 16';
    }

    return '';
}

function validationInfo(validationStr){
    if(validationStr === ''){
        returnObj.valid = true;
        returnObj.number = lastString;
        delete returnObj.error;
    }else {
        returnObj.valid = false;
        returnObj.number = lastString;
        returnObj.error = validationStr;
    }
    return returnObj;
}

console.log(validationInfo(validateCreditCard('0001-1111-1111-2114')));// true

console.log(validationInfo(validateCreditCard('0001-1111-1111-2113')));// false

console.log(validationInfo(validateCreditCard('00011111-1111-2114')));//false

console.log(validationInfo(validateCreditCard('4444444444444444')));// false

console.log(validationInfo(validateCreditCard('444224444444444')));// false

console.log(validationInfo(validateCreditCard('1001-1111-1111-2114')));// true

console.log(validationInfo(validateCreditCard('1001-0000-1111-2114')));// false

console.log(validationInfo(validateCreditCard('1001-0000-111a-2114')));// false

// function validateCreditCard(str){// no bonuses
//     if(str.length !== 16){
//         return false;
//     }
//     console.log(str.length);
//     var arr = str.split('');
//     console.log(arr);
//     var check = arr.every((value) => {// check if all the string is consisted from digits
//         console.log("hi mtf",value);
//         return Number.isInteger(parseInt(value));
//     });
//     if(!check){
//         return false;
//     }
//     check = arr.some((value) => {
//         return arr[0] !== value;
//     });
//     if(!check){
//         return false;
//     }
//     if(arr[arr.length -1] % 2 !== 0){
//         return false;
//     }
//     var sum = arr.reduce((total, y) => {
//         return parseInt(total) + parseInt(y);
//     });
//     console.log('sum:',sum);
//     if(sum <= 16){
//         return false
//     }

//     return true;
// }

// console.log(validateCreditCard('0001111111112114'));
