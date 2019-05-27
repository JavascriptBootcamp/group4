const fs = require("fs");

function appendFilePromise(filename,data) {
  return new Promise((response, reject) => {
    try {
      fs.appendFile(filename, data, err => {
        if (err) reject(`Error: ${err}`);
        response("file appended");
      });
    } catch (ex) {
      reject(`Error: ${err}`);
    }
  });
}

function readFilePromise(filename) {
  return new Promise((res, rej) => {
    try {
      fs.readFile(filename, "utf-8", (error, data) => {
        if (error) rej(`Error: ${error}`);

        res(data);
      });
    } catch (ex) {
      rej(`Error: ${ex}`);
    }
  });
}

function unlinkPromise() {
  return new Promise((result, reject) => {
    try {
      fs.unlink(path, error => {
        if (error) {
          reject(error);
        }
        result(`file:${path} deleted`);
      });
    } catch (ex) {
      reject(`Error: ${ex}`);
    }
  });
}

function writeFilePromise() {
  return new Promise((result, reject) => {
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

function readFileIfExists(path) {
  return new Promise((result, reject) => {
    try {
      fs.access(path, fs.F_OK, err => {
        if (err) {
          reject("file not exists");
          return;
        }
        result(
          new Promise((result, reject) => {
            try {
              fs.readFile(path, "utf-8", (error, data) => {
                if (error) reject(`Error: ${error}`);
                result(data);
              });
            } catch (err) {
              reject({ error: err });
            }
          })
        );
      });
    } catch (err) {
      reject({ error: err });
    }
  });
}

/* 
function readFileIfExists(path) {
  return new Promise((result, reject) => {
    try {
      fs.access(path, fs.F_OK, err => {
        if (err) {
          reject("file not exists");
          return;
        }
  result( return new Promise ((result,reject)=> {
    try {
      fs.readFile(path, "utf-8", (error, data) => {
        if (error) reject(`Error: ${error}`);
        result(data);
    }
  }

    catch(err) {

    }
  });
      )
  )
  
  })
        
        });
      });
    } catch (err) {}
  });
}
 */

module.exports = {
  writeFilePromise,
  unlinkPromise,
  readFilePromise,
  appendFilePromise,
  readFileIfExists
};
