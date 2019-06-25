const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());



app.post('/file', (req, res) => {
  const textPath = './found_files.txt';
  const ifExistPath = './documents/';
  const files = req.body;
  
  let founds = "";

  files.forEach(element => {
    try {
      if (fs.existsSync(`${ifExistPath}${element}`)) {
        founds = founds + " " + element;
      }
    } catch (err) {
      console.error(err)
    }
  });

  if (founds !== "") {
    try {
      fs.openSync(textPath, 'w');
      fs.writeFileSync(textPath, JSON.stringify(founds))
    } catch (err) {
      console.error(err)
    }
  }

  res.send(founds);
});

app.listen(5000, () => console.log("Server starts in 5000..."));