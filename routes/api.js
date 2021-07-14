const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//get a list of ninjas from the db
router.get('/ninjas', (req, res)=> {
    console.log('hello world');
    res.send({type:'GET'});
});

//add a new ninja to the db
router.post('/ninjas', (req, res)=> {
    Ninja.create(req.body).then((ninja)=>{
        res.send(ninja);
    });
});

//update a ninja in the db
router.put('/ninjas/:id', (req, res)=> {
    res.send({type:'PUT'});
});

//delete a ninja from the db
router.delete('/ninjas/:id', (req, res)=> {
    res.send({type:'DELETE'});
});

module.exports = router;
