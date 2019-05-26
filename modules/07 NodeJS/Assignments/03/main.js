const pfs = require('./modules/prom-fs');

const filePath = "./index.html";

pfs.readFileIfExists(filePath).then(data => {
    console.log(data);
}).catch((e) => console.log(e));

pfs.writeFilePromise(filePath, 'gaby buchnik test 1').then(data => {
    console.log(data);
}).catch(e => console.log(e));

pfs.appendFilePromise(filePath, 'change text !!!!').then(data => {
    console.log(data);
}).catch(e => console.log(e));

pfs.readFilePromise(filePath).then(data => {
    console.log(data);
}).catch(e => console.log(e));

pfs.unlinkPromise(filePath).then(data => {
    console.log(data);
}).catch(e => console.log(e));