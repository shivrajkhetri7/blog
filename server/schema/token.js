const mongoose = require('mongoose');

const TokenSchema = mongoose.Schema({
    token: {
        type: String,
        required: true
    }
});


const Token = mongoose.model('token', TokenSchema);

module.exports =  Token;