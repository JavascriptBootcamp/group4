const express = require("express");
const zlib = require('zlib');
const fs = require('fs');
const path = require('path');
const app = express();

const csvFilePath = "students.csv";
const csvBuckupFilePath = path.join("backup",`${csvFilePath}.gz`);
app.get('/',(req,res)=>{
    fs.createReadStream(csvFilePath)
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream(csvBuckupFilePath))
   .on("finish",()=>console.log("Backup successful!"));
});

app.listen(5000,()=>console.log("Server is running in port 5000!"));