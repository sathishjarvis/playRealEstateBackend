const mongoose = require('mongoose');

const directorySchema = new mongoose.Schema({
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
});

// Update the updatedAt field before saving
directorySchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('persons', directorySchema);