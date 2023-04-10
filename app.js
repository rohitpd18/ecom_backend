const express = require("express");
const product_routes= require('./routes/product');
const connectDB = require('./db/conn')

const app = express();

require('dotenv').config()


app.get('/', (req, res)=>{
    res.send('Server up')
})


// middleware or to set route
app.use('/api/products/', product_routes);




const PORT = process.env.PORT || 8000;
const start= async()=>{
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
          console.log(`listing to http://localhost:${PORT} `);
        });
        
    }catch(err){
        console.log(err);
    }

}

start();