const mongoose = require("mongoose") 
const rabbitSchema = mongoose.Schema({ 
 rabbit_type: {
     type:String,
     minLength:4

 },

 size: {
     type:String,
     minLength:2

 } ,
 cost: Number 
}) 
 
module.exports = mongoose.model("rabbit", 
rabbitSchema)