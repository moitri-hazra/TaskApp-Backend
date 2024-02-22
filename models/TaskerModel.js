const mongoose = require('mongoose');

const taskerSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Complete: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Tasker', taskerSchema);
