const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = new express;
const prof = require('./profiledata');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
mongoose.connect('mongodb://0.0.0.0:27017/profile').then(()=>{
    console.log('connected')
})


app.get('/api/v1/profile/health',function(req,res,next){
    res.send("server is running");
})

app.get('/api/v1/expense',async function(req,res,next){
    try{
        const profile_data = await prof.find();
        res.send(profile_data);
    }
    catch(err){
        res.send(err);
    }
})

app.listen(8080,function(){
    console.log("Server is running")
})