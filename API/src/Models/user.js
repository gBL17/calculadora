const mongoose = require('../DataBase');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;