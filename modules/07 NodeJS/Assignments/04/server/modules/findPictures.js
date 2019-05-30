
const request = require('request-promise');

function findPicturesBySearch(url){

  return new Promise((resolve,reject)=>{

    request(url,(error,response,body)=>{

           if(error){
            reject("there was an error in the server");
           }

           resolve(body);
    })

  });

}

module.exports = findPicturesBySearch;


