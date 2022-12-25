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


const seedProducts = [
    {   
        name: 'Broccoli',
        price: 1.9,
        category: 'vegetable'
    },
    
    {   
        name: 'Honeyberries',
        price: 2.7,
        category: 'fruits'
    },

    {   
        name: 'Yogurt',
        price: 1.8,
        category: 'diary'
    },

    {   
        name: 'Grapefruit',
        price: 3.7,
        category: 'fruits'
    },

    {   
        name: 'Butter',
        price: 1.2,
        category: 'diary'
    },

    {   
        name: 'Milk',
        price: 2.9,
        category: 'diary'
    },

    {   
        name: 'Bottle gourd	',
        price: 2.4,
        category: 'vegetable'
    },


] 


Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    });