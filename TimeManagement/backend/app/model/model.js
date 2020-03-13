const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TimeSchema = new Schema({

    TimeIn:
    {
        type: String
    },
    TimeOut:
    {
        type: String
    },



}, {
    collection: "time"
});


module.exports = mongoose.model('Time', TimeSchema);