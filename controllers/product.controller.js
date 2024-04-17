const express = require('express')
const mongoose = require('mongoose');
const Product = require('../models/product.model')
const app = express()
app.use(express.json())

const getAllProducts = async(req,res) => {
    try{
       const products =  await Product.find({})
       res.status(200).json(products)
    }catch{
      res.status(501).json({message: error.message})
    }
}


const getSingleProduct = async(req,res) => {

    try{
      const { id } = req.params
      const product = await Product.findById(id)
      res.status(200).json(product)
    }catch{
      res.status(501).json({message: error.message})
    }
}

const createProduct = async (req,res) => {
    try{
    await Product.create(req.body);
    res.status(200).json(Product)
  }catch(error){
    console.log(error)
    // res.status(501).json({message: error.message})
    // res.send("Enter Product Name")
    // let errorArrray = new Array(error.errors);

    // errorArrray.push(error.errors)
    // console.log(errorArrray[0].length);
    // console.log(error.errors);
    if(error.code == 11000){
      res.status(200).json({error:"No Dupllication of Product is Allowed"})
    }else{

      let errorString = ''
      for (const key in error.errors) {
        // console.log(key);
       
          errorString += `${error.errors[key].message} `
          console.log(errorString)
          errorString+=" "
          // res.write(error.errors[key].message)
  
        
      }
      res.json({error:errorString.trim()})
    }
  }
}

const updateProduct = async(req,res) => {

    try{
      const id  = req.params.id;
      console.log(id)
      const product = await Product.findByIdAndUpdate(id,req.body)
    //   if(!product){
    //     return res.status(404).json({message : "Prroduct Not Found"})
    //   }
  
       const updatedProduct =  await Product.findById(id)
       res.status(200).json(updatedProduct)
  
    }catch(error){
      res.status(501).json({message: error.message})
    }
}

const deleteAllProduct = async(req,res) => {

    try{
      // const { id } = req.params
      const product = await Product.deleteMany()
      // if(!product){
      //   return res.status(404).json({message : "Prroduct Not Found"})
      // }
  
      //  const updatedProduct =  await Product.findById(id)
       res.status(200).json(product)
  
    }catch(error){
      res.status(501).json({message: error.message})
    }
  
  }
  const deleteSingleProduct = async(req,res) => {

    try{
      const { id } = req.params
      const product = await Product.findByIdAndDelete(id)
      if(!product){
        return res.status(404).json({message : "Prroduct Not Found"})
      }
  
       const updatedProduct =  await Product.findById(id)
       res.status(200).json(product)
  
    }catch(error){
      res.status(501).json({message: error.message})
    }
    // res.status(200).json({message: "Product Deleted Successfully"})
  }


module.exports = {
    getAllProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteAllProduct,
    deleteSingleProduct
}