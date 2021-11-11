const mongoose = require("mongoose") 
const rabbitSchema = mongoose.Schema({ 
 rabbit_type: String, 
 size: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("rabbit", 
rabbitSchema)