const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)




mongoose.connect('mongodb://localhost:27017/shopApps')
.then(() =>{
    console.log(" Connection Open !!!!")
})
.catch(err => {
    console.log("Ohh No Error !!!")
    console.log(err)
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/dogs', (req, res) =>{
    res.send('WOOF');
})


app.listen(8080, () => {
        console.log('APP IS LISTENING ON PORT 8080')
})