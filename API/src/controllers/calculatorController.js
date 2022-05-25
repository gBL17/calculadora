const express = require('express');

const Calculator = require('../Models/Calculator');

const router = express.Router();

router.post('/calculator', async (req, res) => {
    try {

        let calculator = req.body
        let result = calculate(calculator.input); 

        calculator.result = result;

        await Calculator.create(calculator);

        return res.status(201).send({ result });

    } catch(err) {
        return res.status(400).send({ error: 'Bad Request' });
    }
});

let calculate = (calc) => {
    return eval(calc);
}

router.get('/historic', (res) => {
    try {
        const historic = Calculator.find({});
        return res.status(200).send({ historic });
    } catch (err) {
        return res.status(400).send({ error: 'Bad Request' });
    }
});

module.exports = app => app.use('/operation', router)