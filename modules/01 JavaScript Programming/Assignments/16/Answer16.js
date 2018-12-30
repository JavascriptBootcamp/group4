var objArr = [  {   
                    title: "An Astronaut's Guide to Life on Earth" , 
                    author: "Chris Hadfield", 
                    alreadyRead: false
                },
                {   
                    title: "The Sailor who Fell from Grace with the Sea" , 
                    author: "Andrzej Sapkowski", 
                    alreadyRead: true
                 },
                 {   
                    title: "What We Talk About When We Talk About Love" , 
                    author: "Raymond Carver", 
                    alreadyRead: false
                 },
];

objArr.forEach(function(book) {
    if (book["alreadyRead"]) {
        console.log ("You already read",book["title"],"by", book["title"]);
    }
    else {
        console.log ("You still need to read",book["title"],"by", book["title"]);
    }
}, this);
