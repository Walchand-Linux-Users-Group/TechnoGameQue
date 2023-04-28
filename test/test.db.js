const mongoose = require('mongoose');

const db = async () => {
    try {
        await mongoose.connect('mongodb+srv://RiteshWanave:xTpY95XjnZkkSILX@technogames.kqosjaa.mongodb.net/TechnoTweet');
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