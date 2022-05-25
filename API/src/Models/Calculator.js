const mongoose = require('../DataBase');

const calculatorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    input: {
        type: String,
        require: true,
    },
     result: {
        type: Number,
        require: true,
    }
});

const Calculator = mongoose.model('Calculator', calculatorSchema);

module.exports = Calculator