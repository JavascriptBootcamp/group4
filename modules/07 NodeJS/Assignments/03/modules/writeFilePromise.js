const fs = require("fs");

function writeFilePromise() {
  return Promise((result, reject) => {
    try {
      fs.writeFile(path, data, err => {
        if (err) {
          reject("error:" + err);
        }
        result(`data created on ${path}`);
      });
    } catch (err) {
      reject("error:" + err);
    }
  });
}

module.exports = writeFilePromise;
