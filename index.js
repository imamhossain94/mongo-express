const express = require('express');

//set up express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
//initializing routes
app.use('/api', require('./routes/api'));

//listen for requests
app.listen( 4000, ()=> {
    console.log("App running");
});


