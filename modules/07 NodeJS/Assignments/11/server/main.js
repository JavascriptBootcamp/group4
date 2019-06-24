const express = require('express');
const app = express();
const cors  = require('cors'); 
const songsRouter = require('./routes/songs');
app.use(cors());
app.use(express.json());

const port = 8000;

app.use('/',songsRouter); 




app.listen(port,()=>{console.log("server is running!")})


 


