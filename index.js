const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')


// mongoose require
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

const Product = require('./models/product');
const { findByIdAndUpdate } = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStands')
.then(() =>{
    console.log(" Connection Open !!!!")
})
.catch(err => {
    console.log("Ohh No Error !!!")
    console.log(err)
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

const categories = ['fruits', 'vegetable', 'dairy']


// Adding the new product
app.get('/products/new', (req, res) => {    
res.render('products/new', {categories})
})


// Posting the new product
app.post('/products',async (req, res) => {   
    const newProduct = new Product(req.body);
    await newProduct.save()
    res.redirect(`/products/${newProduct._id}`)
})

// Getting the product 
app.get('/products',async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', {products});
})

// product id
app.get('/products/:id', async(req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/show', {product})
    
})

// product edit
app.get('/products/:id/edit', async (req, res) => {    
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/edit', {product, categories})
})

// findByIdAndUpdate
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true})
    res.redirect(`/products/${product._id}`)
})

// product delete
app.delete('/products/:id', async (req, res) => {   
    const { id } = req.params;
    const deleteproduct = await Product.findByIdAndDelete(id)
    res.redirect('/products')
})


app.listen(8080, () => {
        console.log('APP IS LISTENING ON PORT 8080')
})