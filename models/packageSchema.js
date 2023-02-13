const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
    packageName: {
        type: String,
        required: true
    },
    image: String,
    details: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    price: {
        type: Number,
        required: true,
        default: 0
    }
}, {
        timestamps: true
    });

module.exports = packageSchema;