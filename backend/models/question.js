const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    optionText: { type: String, required: true },
    votes: { type: Number, default: 0 }
});

const questionSchema = new mongoose.Schema({
    questionText: { type: String, required: true },
    options: [optionSchema]
});

module.exports = mongoose.model('Question', questionSchema);