// const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name:{
        type: String,
        required : [true, "Please Enter The Product Name"],
        unique:[true]
    },
    quantity :{
        type:Number,
        required : [true, "At least One"],
        default : 1
     },
     price: {
        type:Number,
        required:[true, "No free Food"],
     },
     Image:{
        type:String,
        required :false
     }
},
{
   timestamps: true
}
);

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product