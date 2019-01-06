function RandomWord (charsArray) {
    if (charsArray.toString().indexOf("Array") > -1) {
        console.log("\"chars\" should be an array");
        return -1;
    }
    this.charsArray = charsArray;
    this.randomize = function(len) {
        var i = 0;
        var str = '';
        if (isNaN(len)) {
            console.log("\"length\" should be a number");
            return -1;
        }
        while (i<=len) {
            if (i<this.charsArray.length) {
                if ((typeof this.charsArray[i]) !== "string") {
                    console.log("\"chars\" should include only strings");
                    return -1;
                }
                else {
                    str = str + this.charsArray[i]; 
                }
            }
            else {
                str = str + this.charsArray[i%this.charsArray.length]
            }
            i++;
        }
        return str;
    };
}
var a = new RandomWord(['a','t','r']);
console.log(a.randomize(10));

