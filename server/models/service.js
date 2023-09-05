const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true},
    active: {type: Boolean},
    photos: {type: Array},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
});

module.exports = mongoose.model("Service", serviceSchema);