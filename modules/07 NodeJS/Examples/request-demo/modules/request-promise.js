const request = require('request');

// Promise
function requestPromise(url) {
    return new Promise((resolve, reject) => {
        // write the implementation
        request(url, (error, response, body) => {
            // if (error) return console.error(`Error: ${error}`);
            if (error) reject(`Error: ${error}`); // failure

            // console.log('body:', body);
            resolve(body);
        });
    });
}

module.exports = requestPromise;