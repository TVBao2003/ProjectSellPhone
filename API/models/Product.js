const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Product = new schema({
    id: {type: String},
    name: {type: String},   
    price: {type: String, default: 1000},
    img: {type: String},
    exitInCart: {type: Boolean, default: false},
    isLike: {type: Boolean, default: false}
    
})
module.exports = mongoose.model("Product", Product);