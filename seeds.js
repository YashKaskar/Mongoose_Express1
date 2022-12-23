const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStands')
.then(() =>{
    console.log(" Connection Open !!!!")
})
.catch(err => {
    console.log("Ohh No Error !!!")
    console.log(err)
})
