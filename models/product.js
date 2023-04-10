const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "name is required"]
    },
    price: {
        type: Number,
        require: [true, "price is required"]
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating:{
        type: Number,
        default: '',
    },
    createdDate:{
        type: Date,
        default: Date.now(),
    } ,
    company:{
        type: String,
        enum: {
            values:["apple", "samsung", "dell"],
            message: 'valuse is not supported'
        }

    }
})


module.exports= mongoose.model('Product', productSchema)