const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');

const app = express()
const port = 3000

const router = require('./Router/authRouter')
const bodyParser = require('body-parser');

app.use(cors());

mongoose.connect('mongodb://localhost:27017/nodejs-portfolio',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('MongoDB connection established');
}).catch(err=>{
    console.log('MongoDB connection failed');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router)

app.listen(3000,()=>{
    console.log(`Port listening ${port}`);
})