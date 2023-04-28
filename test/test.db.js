const mongoose = require('mongoose');
require('dotenv').config();

const db = async () => {
    try {
        console.log(process.env.DB_URI);
        await mongoose.connect(process.env.DB_URI)
        console.log('Connected to MongoDB');
    }
    catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
}

const User = mongoose.model('User', new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        score: {
            type: Number,
            required: true,
        },
    }
));

module.exports = {db, User}
