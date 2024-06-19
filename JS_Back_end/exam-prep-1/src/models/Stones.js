const {Schema, model, Types} = require('mongoose');

// TODO replace with data model from exam description

const stonesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    formula: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    likedList: {
        type: [Types.ObjectId],
        required: true,
        default: []
    },
    author: {
        type: Types.ObjectId,
        ref: 'User',
    }
});

const Stones = model('Stones', stonesSchema);

module.exports = {Stones};