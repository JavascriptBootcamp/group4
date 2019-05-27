const pfs = require('./modules/prom-fs');

const filePath = "./index.html";

const executeReadFileIfExists = async () => {
    try {
        await pfs.readFileIfExists(filePath).then(data => console.log(data));
    }
    catch (err) {
        console.log(err);
    }
}
const executeWriteFilePromise = async () => {
    try {
        await pfs.writeFilePromise(filePath, 'gaby buchnik test 1').then(data => console.log(data))
    } catch (err) {
        console.log(err)
    }
}
const executeAppendFilePromise = async () => {
    try {
        await pfs.appendFilePromise(filePath, 'change text !!!!').then(data => console.log(data));
    } catch (err) {
        console.log(err)
    }
}
const executeReadFilePromise = async () => {
    try {
        await pfs.readFilePromise(filePath).then(data => console.log(data));
    } catch (err) {
        console.log(err)
    }

}
const executeUnlinkPromise = async () => {
    try {
        await pfs.unlinkPromise(filePath).then(data => console.log(data));
    } catch (err) {
        console.log(err)
    }
}


(async () => {
    //await executeReadFilePromise();
    await executeReadFileIfExists();
    await executeWriteFilePromise();
    await executeReadFileIfExists();
    await executeAppendFilePromise();
    await executeReadFileIfExists();
    await executeUnlinkPromise();
    await executeReadFileIfExists();
})();




