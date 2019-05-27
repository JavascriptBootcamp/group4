const promFs = require('./modules/prom-fs.js');

promFs.readFilePromise("file.txt").then( res=>{
    console.log(res);
})