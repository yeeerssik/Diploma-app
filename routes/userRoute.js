const express = require('express');
const User = require('../models/userModel');
const app = express.Router();

app.post('/login', async (req, res) => {
    try {
        const result = await User.findOne({ 
            username: req.body.username, 
            password: req.body.password 
        });
        if (result) {
            res.send(result);
        } 
        else {
            res.status(400).json('Login failed');
        }
    } catch (err) {
        res.status(400).json(error);
    }
});

app.post('/register', async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save();

        res.send('Registration successful');
    } catch (err) {
        res.status(400).json(error);
    }
});

app.post('/update', async (req, res) => {
    try {
        await User.findOneAndUpdate({_id: req.body._id},  req.body);
        const user = await User.findOne({ _id: req.body._id });
        res.send(user);
        // await newUser.save();
    } catch (err) {
        res.status(400).json(error);
    }
});


module.exports = app;