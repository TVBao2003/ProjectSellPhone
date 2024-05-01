const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1/projectsellphone');
        console.log("Connect successfully");
    } catch (error) {
        console.log("Connect failue")
    }
}

module.exports = {connect};