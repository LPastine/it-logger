const mongoose = require('mongoose');

const LogSchema = mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    attention: {
        type: Boolean,
        required: true,
    },
    tech: {
        // Change this after tech route implementation
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'tech',
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('log', LogSchema);