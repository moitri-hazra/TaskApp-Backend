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
    Responsible: {
        type: String,
        required: true
    },
     Priority: {
    type: [String],
    enum: ['low', 'medium', 'high'],
    default: ['low'],
  }
});

module.exports = mongoose.model('Tasker', taskerSchema);
