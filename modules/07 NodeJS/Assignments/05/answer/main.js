const express=require('express');
const app=express();
app.use(express.json());

const messages=[];

//POST
app.post('/',(request,response)=>{
const newMesID=Math.floor(Math.random(1000));
const newMesAuthor=request.body.author;
const newMesMesseage=request.body.message;
messages.push({
    id: newMesID,
    author: newMesAuthor,
    messeage: newMesMesseage
});
    responseJson(response,messages);
});

//GET
app.get('/',(request,response)=>{
    responseJson(response,messages);
});

//UPDATE

app.put('/',(request,response)=>{
    const mesID=Number(request.query.id);
    const mesIndex=getIndexById(messages,mesID);
    messages[mesIndex].message=request.body.message;
    responseJson(response,messages);
})

function responseJson(response,result){
    response.json({result});
}

function getIndexById(arr,id){
    return arr.findIndex(item=>item.id===id);
}
app.listen(8000,()=> console.log("server is running in port 8000"));