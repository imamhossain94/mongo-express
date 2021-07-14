const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create ninja Schema & model
const NinjaSchema = new Schema({
    name:{
        type:String,
        require: [true, "Name field is required"]
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;