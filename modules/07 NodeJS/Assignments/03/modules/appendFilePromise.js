const fs = require("fs");

function appendFilePromise(filename) {
  return new Promise((response, reject) => {
    try {
      fs.appendFile(filename, data, err => {
        if (err) reject(`Error: ${err}`);

        res(data);
      });
    } catch (ex) {
        reject(`Error: ${err}`);
    }
  });
}

module.exports = appendFilePromise;