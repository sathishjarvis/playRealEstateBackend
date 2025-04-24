const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const directory = new Schema({

    Name: {
        type: String,
        trim: true
    },
    Phone: {
        type: Number,
        trim:true
    },
    Profession: {
        type: String,
        trim: true
    },
    Location: {
        type: String,
        trim: true
    },
    Languages: {
        type: String,
        trim: true
    },
    Hobbies: {
        type: String,
        trim: true
    },
    Charges: {
        type: String,
        trim: true
    },
    Video: {
        type: String,
        trim: true
    },
    Audio: {
        type: String,
        trim: true
    },
    Specialization: {
        type: String,
        trim: true
    },
    Working_place: {
        type: String,
        trim: true
    }

}, { timestamps: true })

module.exports = mongoose.model("persons", directory);