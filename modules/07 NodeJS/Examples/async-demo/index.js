// Promise
// function init() {
//     fetch('http://localhost:5000')
//     .then( response => response.text() )
//     .then( data => console.log(data) )
// }

// init();


// async-await
// async function asyncInit() {
//     console.log("step1");
//     // const response = await fetch('http://localhost:5000');
//     const response = await fetch('http://localhost:5000');
//     // response.then( () => console.log("Gabi is the king") );
//     console.log("response", response);
//     console.log("step2");
//     const data = await response.text();
//     console.log("step3");
//     console.log(data);
//     console.log("step4");
// }
// (async function(){
//     await asyncInit();
//     console.log("step5");
// })();

// 0 time out
function doAsyncOperation() {
    return new Promise( (resolve) => {
        setTimeout( async () => {
            const response = await fetch('http://localhost:5000');
            const data = await response.text();
            console.log("data", data);
            resolve("2. David is the king")
        }, 0);
    }) 
}

(async () => {
    console.log("1");
    const msg = doAsyncOperation();
    console.log("msg", msg);
    console.log("3");
})();
console.log("4");
