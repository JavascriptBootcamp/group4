//Question:
// {/* <p>write a function that checks if a given string is a palindrome.</p>
// <p>for example, "abccba" is palindrome, but "abccb" is not palindrome.</p> */}

//Answer:
function isPalindrome (string)
{
    var reversedString = string.toLowerCase().split('').reverse().join('');
    return reversedString === string;
}

console.log (isPalindrome("offo"));