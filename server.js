const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

mongoose
    .connect(process.env.DATABASE,{
        useNewUrlParser: true,
        useUnifiedtopology: true
    })
    .then(()=>console.log('DB connected'))
    .catch(err=>console.log(err));

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.get('*',(req,res)=>{
    res.json({
        data: 'You reached nodejs api for react node crud app'
    });
});

const port = process.env.PORT || 8000;
app.listen(port, ()=>console.log(`Server is running on port ${port}`));