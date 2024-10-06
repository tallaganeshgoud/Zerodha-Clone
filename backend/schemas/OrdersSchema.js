const { mongo } = require("mongoose");

const {Schema}= new Schema({
    name:String,
    qty:Number,
    price:Number,
    model:String,
});
module.exports={OrdersSchema};
