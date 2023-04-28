const mongoose = require('mongoose');



const User = mongoose.model('User', new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
        }
    }
));

module.exports = User