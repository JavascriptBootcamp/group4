function testPalindrom(str) {
    n = str.length;
    for (var i=0; i<n ; i++) {
        if (str[i] !== str[n-i-1]){
            return false;
        }
    }
    return true;
}