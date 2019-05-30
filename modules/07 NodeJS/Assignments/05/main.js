const express = require("express");

const app = express();
const port = 8000;

let chatMessages = [];

app.use(express.json());

app.get('/', (req, res) => {
  res.json(chatMessages);
});

app.post('/', (req, res) => {

     const chatId = Math.floor(Math.random()*1000);
     const Author = req.body.Author;
     const Message = req.body.Message;

     chatMessages.push({chatId,Author,Message});
    res.json(chatMessages);
})

app.put('/',(req,res)=> {
    const chatId = Number(req.query.id);
    chatIndex = chatMessages.findIndex(value => value.chatId === chatId);
    if(chatIndex > -1) {
    chatMessages[chatIndex].Message = req.body.Message;
    res.json(`chat:${ chatId} updated` );
    }else {
                res.json(`chat:${ chatId} not Exit` );

    }

    
    //chatMessages.splice(chatIndex,1);

})

app.delete('/',(req,res)=> {

    const chatId = Number(req.query.id);
    chatIndex = chatMessages.findIndex(value => value.chatId === chatId);
    if(chatIndex > -1) {
     chatMessages.splice(chatIndex,1);
    res.json(`chat:${ chatId} deleted` );
    }else {
                res.json(`chat:${ chatId} not Exit` );

    }

    
});

app.listen(port,()=>{
    console.log(`server running on port ${8000}`);
})