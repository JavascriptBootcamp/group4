const file = require('fs');

const write = str =>{

file.writeFile('contacts.json',str,(error)=>{
    if(error){
        return console.log(error);
    };
    console.log('file was created');
})



}



module.exports = write;