const express = require("express");
const app = express();
const Product = require('./models/Product');
const User = require('./models/User');
const database = require('./config/database');
database.connect();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

//--- [GET] /product
app.get('/product', (req, res)=>{
    Product.find({})
        .then(product=>res.status(200).json(product))
        .catch(error=>res.status(400).json(error, "ERROR"));
})
//--- [GET] /user
app.get('/user', (req, res)=>{
    User.find({})
    .then(user=>res.status(200).json(user))
    .catch(error=>res.status(400).json(error, "ERROR"));
})
//--- [POST] /user
app.post('/user', (req, res)=>{
    const user = new User(req.body);
    user.save();
    res.redirect('http://127.0.0.1:5500/HTML/formSignIn.html');
})
//--- [POST] /user/update
app.post('/user/update', (req, res)=>{
    User.updateOne({_id:req.body._id}, req.body)
    .then(()=> res.redirect('http://127.0.0.1:5500/HTML/userPage.html'))
   
})

// add
app.listen(8000, ()=>{
    console.log("Server is running........");
})