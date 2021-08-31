const mongoose = require('../bin/mongodb')

const carSchema =  new mongoose.Schema({
    brand: String,
    model: String,
    type: String,
    motorSize:String,
    entryDate:{type:Date, default:Date.now},
    description: String,
    fee:Number,
    year:Number,
    categories: String
});

module.exports = mongoose.model('cars', carSchema)


