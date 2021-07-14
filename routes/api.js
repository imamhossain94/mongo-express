const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//get a list of ninjas from the db
router.get('/ninjas', (req, res, next)=> {
    
});

//add a new ninja to the db
router.post('/ninjas', (req, res, next)=> {
    Ninja.create(req.body).then((ninja)=>{
        res.send(ninja);
    }).catch(next);
});

//update a ninja in the db
router.put('/ninjas/:id', (req, res, next)=> {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then((ninja)=>{
        Ninja.findOne({_id: req.params.id}).then((ninja)=>{
            res.send(ninja);
        });
    });
});

//delete a ninja from the db
router.delete('/ninjas/:id', (req, res, next)=> {
    Ninja.findByIdAndRemove({_id: req.params.id}).then((ninja)=>{
        res.send(ninja);
    });
});

module.exports = router;
