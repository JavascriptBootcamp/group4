var old_str = "word1 word2 word3 word4 word5 word6 word7 word8";
let new_str = "";
function func1(old_str) {
    temp_str = old_str.split(" ");
    for (let i = 0; i < temp_str.length; i++) {
        i % 2 != 0 ?  new_str = new_str +  temp_str[i] + " " : "";
    }
    return new_str;
}
console.log(func1(old_str));