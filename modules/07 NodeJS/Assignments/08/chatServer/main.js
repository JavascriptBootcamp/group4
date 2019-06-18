const express = require("express");
const cors = require("cors");
const fs = require("fs");

var path = require("path");
var mime = require("mime");

const app = express();

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());

const chat = [];

app.get("/download", function(req, res) {
  const file = __dirname + "/log.csv";
  const filename = path.basename(file);
  const mimetype = mime.lookup(file);
  console.log(req.url);
  res.setHeader("Content-disposition", "attachment; filename=" + filename);
  res.setHeader("Content-type", mimetype);

  const filestream = fs.createReadStream(file);
  filestream.pipe(res);
});

// Read
app.get("/", (request, response) => {
  const mess = request.query.search;
  if (mess) {
    const res = searchMess(mess);
    responseJson(response, res);
  } else responseJson(response, chat);
});
function searchMess(mess) {
  return chat.filter(message => message.message.indexOf(mess) !== -1);
}
// Delete
app.delete("/", (request, response) => {
  const id = Number(request.query.id);
  const chatIndex = getIndexById(chat, id);

  writeCSVLog("DEL", id, chat[chatIndex].message, chat[chatIndex].author);

  chat.splice(chatIndex, 1);

  responseJson(response, "ok");
});

// Update
app.put("/", (request, response) => {
  const id = Number(request.query.id);
  const chatIndex = getIndexById(chat, id);
  chat[chatIndex].message = request.body.message;

  writeCSVLog("PUT", id, chat[chatIndex].message, chat[chatIndex].author);

  responseJson(response, "ok");
});

// Create
app.post("/", (request, response) => {
  const id = Math.floor(Math.random() * 10000);
  const author = request.body.Author;
  const message = request.body.Message;

  chat.push({
    id,
    author,
    message
  });
  writeCSVLog("ADD", id, message, author);
  responseJson(response, "ok");
});

function getIndexById(arr, id) {
  return arr.findIndex(item => item.id === id);
}

function responseJson(response, result) {
  response.json({
    result
  });
}

function writeCSVLog(method, msg_id, message, auther) {
  const today = new Date();
  const date =
    today.getFullYear() +
    "/" +
    (today.getMonth() + 1) +
    "/" +
    today.getDate() +
    " " +
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds();
  const log = `\n${date}, ${method},${msg_id},${message},${auther}`;
  fs.appendFile("log.csv", log, err => {
    if (err) {
      console.error(err);
      return;
    }
    //done!
  });
}

app.listen(8000, () => console.log("server is running in port 8000"));
