const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());

app.use((req, res) => {
  console.log(req.url);
});

const chat = [];

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
  chat.splice(chatIndex, 1);
  responseJson(response, "ok");
});

// Update
app.put("/", (request, response) => {
  const id = Number(request.query.id);
  const chatIndex = getIndexById(chat, id);
  chat[chatIndex].message = request.body.message;
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
  WriteCSVLog("post", 2, "hi there", "avi");
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

function WriteCSVLog(method, msg_id, message, auther) {
  console.log(new Date(), method, msg_id, message, auther);
}

app.listen(8000, () => console.log("server is running in port 8000"));
