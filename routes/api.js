const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja.js');

// get a list of ninjas from database
// router.get('/ninjas', function(req, res, next){
//     Ninja.geoNear(
//         {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
//         {maxDistance: 100000, spherical: true}
//     ).then(function(ninjas){
//         res.send(ninjas);
//     });
// });

router.get('/ninjas', function(req, res, next){
    Ninja.aggregate().near({
        near: { type: "Point", coordinates: [parseFloat(req.query.lng) , parseFloat(req.query.lat)] }, 
        distanceField: "dist.calculated", 
        maxDistance: 100000, 
        spherical: true 
        }).then(function(ninjas){ 
            res.send(ninjas); 
        }).catch(next); 
});


// add new ninja to database
router.post('/ninjas', function(req, res, next){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

// update ninja already in database
router.put('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        })
    });
});

// delete ninja in database
router.delete('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    });
});

module.exports = router;
