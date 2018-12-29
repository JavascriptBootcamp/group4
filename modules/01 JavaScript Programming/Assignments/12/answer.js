//Question: Write a function that given a string of words, returns a string composed of the even words (1-based) from the original string

//Answer:

str = "ofek checking this function, even or not even"

function evenWords(str) {
    var res = str.split(" ");
    var even = res.filter(function(item){
        return item.length%2 === 0;
    });
    console.log(even.join(' ') );
}

evenWords(str);