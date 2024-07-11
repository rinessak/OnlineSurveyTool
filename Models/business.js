const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    fiscalNumber: {
        type: String,
        required: true,
        unique: true},
    address: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Business', businessSchema);
