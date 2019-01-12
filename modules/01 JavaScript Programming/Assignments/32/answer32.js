var str1 = 'abcba';
var str2 = 'abba';
var str3 = '123bbb121';

function isPolindrome(str) {
    var arr = str.split('');
    var isPolindrome = true;

    while (arr.length > 1 ) {
        if (arr.shift() !== arr.pop()) { 
            isPolindrome = false;
        }
    }

    return isPolindrome;
}

console.log(str1, "is polindrome:", isPolindrome(str1));
console.log(str2, "is polindrome:", isPolindrome(str2));
console.log(str3, "is polindrome:", isPolindrome(str3));