const express = require('express');
const cors = require('cors');
const writeFile = require('./write-file');

const fileSystem = require('fs');
const app = express();
const root = 'documents\\';

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());

app.post('/file', (Request, response,next) => {
    try {
        response.status(200);
        var files = Request.body.files;
        files.forEach(function(file) {
        
            if (checkIfExists(root+file)) {

                writeFile(file)
            }
        }
        );
        response.status(200);
        response.json({
            result: "OK"
        })

    } catch (error) {
        response.status(500).json({
            result: "Internal Server Error"
        })
    }
  next();
});

function checkIfExists(fileName) {

    // fileSystem.access(fileName, fs.F_OK, (err) => {
    //     if (err) {
    //       console.error(err);
    //       return false;
    //     }
    //     return true
    //     // file exists
    //   });
    try {
        return fileSystem.existsSync(fileName)

    } catch (err) {
        console.error(err)
    }
  

}
app.post('/file', (req, res) => {
    const files = req.body.files;
    console.log(files);
});
app.listen(5000, () => console.log(`Example app listening on port 5000}!`)); 