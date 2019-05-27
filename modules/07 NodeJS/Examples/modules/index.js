// const log = console.log.bind(console, "lib>");

// function doSomething(str) {
//     log(str);
// }

// module.exports = doSomething;

const log = console.log.bind(console, "lib>");

function doSomething(str) {
    log(str);
}

module.exports = {func: doSomething};