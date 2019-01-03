function polyndrom(str)
{
    var strArr = str.split('');
    var fullLength = strArr.length;
    var halfLength = fullLength / 2;
    halfLength -= (halfLength % 2);
    for(var i = 0; i <= halfLength;i++)
    {
        if(strArr[i] !== strArr[fullLength-1 -i])
            return false;
    }
    return true;
}

console.log(polyndrom("abccba"));
console.log(polyndrom("abccb"));

