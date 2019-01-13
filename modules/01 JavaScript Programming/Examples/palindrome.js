function isPalindrome(text){
    // var lowerCaseText = text.toLowerCase();
    // var arrText = lowerCaseText.split('');
    // var reversedText = arrText.reverse();
    // var joinedText = reversedText.join('');
    return text === text.toLowerCase().split('').reverse().join('');
}

var result = isPalindrome("abccba");
console.log(result);