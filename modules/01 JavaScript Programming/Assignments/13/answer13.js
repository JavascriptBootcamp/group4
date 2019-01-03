function isPalindrome(str) {

    for (var i = 0, j = str.length - 1; i < str.length / 2 + 1 , j > str.length / 2 - 1 ; i++ , j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }

    return true;
}