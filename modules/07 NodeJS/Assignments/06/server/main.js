const fs = require("fs");
const path = require("path");

const express = require("express");
const cors = require("cors");

const app = express();

//const stream = fs.createReadStream(path.resolve(__dirname, "documents"));

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());

let matchingFileNames = [];

app.post("/file", (req, res) => {
  matchingFileNames = [];
  //const writeStream = fs.createWriteStream("./found_files.txt");
  const serchFiles = req.body;
  testFolder = path.resolve(__dirname, "documents");
  fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
      serchFiles.files.forEach(searchFile => {
        if (file === searchFile) {
          matchingFileNames.push(file);
          fs.appendFile("./found_files.txt", `${file} `, function(err) {
            if (err) {
              return console.log(err);
            }
          });
          //req.pipe(writeStream);
        }
      });
    });
    res.send(matchingFileNames);
  });
});
/* fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
      console.log(file);
    }); */
/*  stream.on("data", function(data) {
    const chunk = data.toString();
    console.log(chunk); */
/*   }); */

/*  const serchFiles = req.body;
  res.send(serchFiles.file1); */

//I get error  - the order must being (req , res)
/* app.get("/", (res, req) => {
  res.send("hello world");
});
 */
app.listen(8000, () => console.log("server is running in port 8000"));
