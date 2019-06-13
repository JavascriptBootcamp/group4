const TIMES = 100000000;

console.log('Hello');

// var worker = new Worker("worker.js");

// worker.postMessage(TIMES);

// worker.addEventListener("message", function (e) {
//     console.log("Result: " + e.data);
// });

function getMult(times) {
    return new Promise((resolve, reject) => {
        console.log('Promise started');
        let val = 1.0
        for (let i = times; i > 0; i--) {
            val *= 0.9;
        }
        resolve(val);
    })
}

getMult(TIMES)
    .then(val => console.log(`Done with ${val}`));