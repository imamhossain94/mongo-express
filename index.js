const express = require('express');
const mongoose = require('mongoose');

//set up express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(express.static('public'));
//initializing routes
app.use('/api', require('./routes/api'));


// error handling middleware
app.use((err, req, res, next)=>{
    res.status(422).send({error: err.message});
});

//listen for requests
app.listen( 4000, ()=> {
    console.log("App running");
});


