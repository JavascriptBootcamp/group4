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
        app.get('/car/LicenseNumber/:LicenseNumber',(req,res,next)=>{
            const _licenseNumber=req.params.LicenseNumber;
            collection.find({LicenseNumber:_licenseNumber}).toArray((err,data)=>{
                if(err)return console.error("cannotFind Because",err)
                else{
                    console.log("123")
                    res.send(data)
                }
            })
            next()
        })
        app.get('/car/year',(req,res)=>{
            let _startYear =req.query.startyear
            let _endYear =req.query.endyear
            collection.find({ Year : { $gt :  _startYear, $lt : _endYear}}).toArray((err,data)=>{
                if(err)return console.error("cannotFind Because",err)
                else{
                    res.send(data)
                }
            })
        })
        app.get('/car/manufacturer/:Manufacturer',(req,res,next)=>{
            const _Manufacturer=req.params.Manufacturer;
            collection.find({Manufacturer:_Manufacturer}).toArray((err,data)=>{
                if(err)return console.error("cannotFind Because",err)
                else{
                    data.forEach(function(element) {
                        delete element._id
                        delete element.LicenseNumber
                        delete element.Manufacturer
                        delete element.Year
                        delete element.KM
                        delete element.Price
                    }, this)
                    res.send(data)
                }
            })
        })
        app.get('/car/model/:Model',(req,res,next)=>{
            const _Model=req.params.Model;
            collection.find({Model:_Model}).toArray((err,data)=>{
                if(err)return console.error("cannotFind Because",err)
                else{
                    data.forEach(function(element) {
                        delete element._id
                        delete element.LicenseNumber
                        delete element.Manufacturer
                        delete element.Year
                        delete element.KM
                    }, this)
                    res.send(data)
                }
            })
        })
        app.get('/car/:firstLicence/:secondLicence',(req,res,next)=>{
            const firstLicence = req.quary.license1
            const secondLicence = req.quary.license2

            let car1 = collection.find({LicenseNumber:firstLicence})
            let car2 = collection.find({LicenseNumber:secondLicence})
            if (car1[0] && car2[0]) {
                if (car1[0].Price > car2[0].Price) {
                    res.send(car1[0])
                } else {
                    res.send(car2[0])
                }
            } else {
                res.send({ error: "one or both licene number not exist" })
            }

            next()
        })
    }
}


















mongo.MongoClient.connect(dbUrl,onConnect)
app.listen(port,()=>{console.log("listninig to port "+port)})