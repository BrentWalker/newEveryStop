const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Load = new Schema({
    load_number: {
        type: String
    },
    load_driver_name: {
        type: String
    },
    load_rate: {
        type: String
    },
    load_tractor_number: {
        type: String
    },
    load_trailer_number: {
        type: String
    },
    load_pu_date: {
        type: String
    },
    load_del_date: {
        type: String
    },
    load_pu_location: {
        type: String
    },
    load_del_location: {
        type: String
    },
    load_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model("Load", Load);

