import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    category: {
        type: String,
        enum: ['fruits', 'vegetable', 'diary']
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = 'Product'
