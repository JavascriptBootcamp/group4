
const requestP = require('request');

function searchImg(url){

    return new Promise((resolve,reject)=>{
  
        requestP(url,(error,response,body)=>{
  
             if(error){
              reject("there was an error in the server");
             }
             resolve(body);
      })
    });
  }
  
  module.exports = searchImg;
  