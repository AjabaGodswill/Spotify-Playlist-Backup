const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const playlistSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('User', playlistSchema);
