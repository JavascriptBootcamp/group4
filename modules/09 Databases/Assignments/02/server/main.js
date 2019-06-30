const express =require('express')
const app = express();
const cors = require('cors')
const mongo = require('mongodb')

const port = 5000;
const dbUrl = 'mongodb://localhost:27017'

app.use(cors())
app.use(express.json())



const onConnect = (err,databases)=>{
    if(err)return console.error("Error Occured",err);
    else{
        const dbName = 'cars-db';
        const db = databases.db(dbName);
        const collectionName = 'cars';
        const collection = db.collection(collectionName)
        // console.log(collection.find().toArray((err,data)=>{
        //     console.log("data"+data)
        // }))
        app.post('/car',(req,res)=>{
            const newCar = req.body;
            console.log(req)
            if(!newCar.LicenseNumber ||!newCar.Manufacturer ||!newCar.Model ||!newCar.Year ||!newCar.KM ||!newCar.Price){
                res.status(500).send({error: "Missing Data"})
            }
            try{
                collection.insertOne(newCar)
                res.send({message:"Added Successfully"})
            }catch{

            }
        })
        app.get('/car/:LicenseNumber',(req,res)=>{
            const _licenseNumber=req.params.LicenseNumber;
            collection.find({LicenseNumber:_licenseNumber}).toArray((err,data)=>{
                if(err)return console.error("cannotFind Because",err)
                else{
                    console.log("123")
                    res.send(data)
                }
            })
        })
        app.get('/car/:startDate/:endDate',(req,res)=>{
            const _start =req.params.startDate
            const _endtDate =req.params.endDate
            collection.find({LicenseNumber:_licenseNumber}).toArray((err,data)=>{
                if(err)return console.error("cannotFind Because",err)
                else{
                    console.log("123")
                    res.send(data)
                }
            })
        })
        app.get('/car/:LicenseNumber',(req,res)=>{
            const _licenseNumber=req.params.LicenseNumber;
            collection.find({LicenseNumber:_licenseNumber}).toArray((err,data)=>{
                if(err)return console.error("cannotFind Because",err)
                else{
                    console.log("123")
                    res.send(data)
                }
            })
        })
    }
}


















mongo.MongoClient.connect(dbUrl,onConnect)
app.listen(port,()=>{console.log("listninig to port "+port)})