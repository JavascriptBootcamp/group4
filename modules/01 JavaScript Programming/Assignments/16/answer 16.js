

var books = [book1={title:"The Hobbit",author:"j.r.r",alreadyRead:true},
             book2={title:"avatar",author:"someone",alreadyRead:false}];
var str="";
books.forEach(function(item){
    for (var key in item){
        if (key=="title") 
            str +=item[key]+" by ";
        if  (key=="author")
            str+=str+item[key];
        if (key=="alreadyRead")
            if (item[key]==true)
                console.log("You already read " +str); 
            else
                console.log("You still need to read " +str);
    }
str=""
});