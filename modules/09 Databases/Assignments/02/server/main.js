const express = require("express");
const mongo = require("mongodb");

const app = express();

const port = 5000;
const dbUrl = "mongodb://127.0.0.1:27017";

app.use(express.json());

const onConnect = (err, databases) => {
  if (err) return console.error("ERROR OCCURED:", err);

  const dbName = "carsDb";
  const db = databases.db(dbName);
  const collectionName = "cars";
  const collection = db.collection(collectionName);

  app.get("/cars", (request, response) => {
    collection.find().toArray((err, data) => {
      if (err) return console.error("ERROR OCCURED:", err);

      console.log("data", data);
      response.send(data);
    });
  });
  app.get("/cars/:number", (request, response) => {
    const { number } = request.params;
    console.log(request.params);
    collection.find({ licenseNumber: number }).toArray((err, data) => {
      if (err) return console.error("ERROR OCCURED:", err);

      console.log("data", data);
      response.send(data);
    });
  });

  app.post("/car", (request, response) => {
    const {
      licenseNumber,
      manufacturer,
      model,
      year,
      km,
      price
    } = request.body;
    if (!licenseNumber || !manufacturer || !model || !year || !km || !price)
      responseWithStatus(500, response, "Missing Data");
    try {
      collection.insertOne({
        licenseNumber,
        manufacturer,
        model,
        year,
        km,
        price
      });
      // response.sendStatus(200);
      // response.status(200).send({
      //     message: "Added successfully"
      // });
      responseWithStatus(200, response, "Added successfully");
    } catch (ex) {
      responseWithStatus(500, response, ex);
    }
  });

  app.delete("/car", (request, response) => {
    const { name } = request.query;
    if (!name) responseWithStatus(200, response, "Missing Data");
    try {
      collection.deleteOne({ name });
      responseWithStatus(200, response, "Deleted successfully");
    } catch (ex) {
      responseWithStatus(500, response, ex);
    }
  });

  app.put("/car", (request, response) => {
    const { name } = request.query;
    const { newName, newIngredients, newPrice } = request.body;
    if (!name || !newName || !newIngredients || !newPrice)
      responseWithStatus(500, response, "Missing Data");
    try {
      collection.updateOne(
        { name },
        {
          $set: { name: newName, ingredients: newIngredients, price: newPrice }
        }
      );
      responseWithStatus(200, response, "Updated successfully");
    } catch (ex) {
      responseWithStatus(500, response, ex);
    }
  });
};

function responseWithStatus(status, response, message) {
  response.status(status).send({
    message
  });
}

mongo.MongoClient.connect(dbUrl, onConnect);

app.listen(port, () => console.log("Server is running on port: " + port));
