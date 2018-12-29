var sentence = "Example sentence to print only words in even places of the sentence"

var res = sentence.split(" ");

for (var i=1;i<res.length;i+=2){
    console.log(res[i]);
}