const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();

const { getAllProducts,getSingleProduct,createProduct,updateProduct,deleteAllProduct,deleteSingleProduct } = require('../controllers/product.controller') 

router.get('/', getAllProducts)
router.get('/:id', getSingleProduct )
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteSingleProduct)
router.delete('/', deleteAllProduct)

module.exports = router