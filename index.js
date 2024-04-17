const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model')
const productRoute = require('./routes/product.routes')
const app = express()
app.use(express.json())

app.use("/api/products", productRoute);

app.get('/', function (req, res) {
  res.send('Hello world')
})

mongoose.connect("mongodb+srv://admin:Xyu6nZk4KjZPVIXw@backenddb.ligztaf.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(()=> {
  console.log("Database Connected Successfully");
  
  app.listen(3000)
}).catch(() => {
  console.log("Connection Failed");
})