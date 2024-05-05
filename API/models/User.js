const mongoose = require('mongoose');
const schema = mongoose.Schema;

const User = new schema({
    name: {type: String, require},
    email: {type: String, require},
    password: {type: String, require},
    items: {type: Array, default: []},
    idOfUser: {type: String},
    phone: {type:String}
})


module.exports = mongoose.model("User", User);