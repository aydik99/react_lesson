const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const User = require('./models/user');
const Comment = require('./models/comment');

mongoose.connect('mongodb://localhost/test');

const app = express();
app.use(cors());

app.get('/users', async (req, res) => {
    const users= await User.find();

    res.json(users);
});

app.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);

    res.json(user);
});

app.get('/comments', async (req, res) => {
    const comments= await Comment.find();

    res.json(comments);
});

app.get('/comments/:id', async (req, res) => {
    const comment = await Comment.findById(req.params.id);

    res.json(comment);
});


app.listen(3000);