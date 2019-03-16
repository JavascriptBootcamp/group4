const fs = require('fs');
const fsp = require('promise-fs')

function doSync(path) {
    console.log('Before Sync');
    try {
        const data = fs.readFileSync(path, 'utf8');
        console.log('Result Sync:', data);
    } catch (err) {
        console.log('Was error Sync');
    }
    console.log('After Sync');
}

// async function doAwait(path) {
//     console.log('Before Await');
//     try {
//         const data = await fsp.readFile(path, 'utf8');
//         console.log('Result Await:', data);
//     } catch (err) {
//         console.log('Was error Await');
//     }
//     console.log('After Await');
// }

function doAsync(path) {
    console.log('Before Async');
    const dataOuter = fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.log('There was error! Async', err);
        } else {
            console.log('Result Async:', data); 
            console.log('Value of error Async:', err); 
        }
    });
    console.log('Bad Result Async:', dataOuter);
    console.log('After Async');
}

function doPromise(path) {
    console.log('Before Promise');
    const dataOuter = fsp.readFile(path, 'utf8')
    .then(function(data){
        console.log('Result Promise:', data); 
        // console.log('Value of error Promise:', err);
        // throw new Error('lalalala');
    })
    .catch(function(err) {
        console.log('There was error in Promise!', err);
    });
    console.log('Bad Result Promise:', dataOuter);
    console.log('After Promise');
}

const path = './test.txt_';
doSync(path);
console.log('-----------------------');
doAsync(path);
console.log('-----------------------');
doPromise(path);
console.log('-----------------------');
// doAwait(path);
console.log('Finished main');