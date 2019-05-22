const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Contact = new Schema({
    contact_name: {
        type: String
    },
    contact_address: {
        type: String
    },
    contact_phone: {
        type: String
    },
});

module.exports = mongoose.model("Load", Load);

