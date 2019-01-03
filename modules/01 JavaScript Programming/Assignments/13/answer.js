function isPalindrome(inputStr)
{
    var isPalindrome = true;

    for(var i = 0; i < inputStr.length/2;i++)
    {
        if(inputStr[i] !==  inputStr[inputStr.length - 1 - i])
        {
            isPalindrome = false;
            break;
        }
    }
    
    return isPalindrome;
}


console.log(isPalindrome("abccba"));
console.log(isPalindrome("abccb"));
