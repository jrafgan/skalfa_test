const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');
const router = express.Router();
const config = require('../config');
const nanoid = require('nanoid');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

router.post('/', upload.single('image'), async (req, res) => {
    let userData = req.body;
    userData = {
        username: req.body.username,
        password: req.body.password,
        country: req.body.country,
        e_mail: req.body.e_mail,

    };
    if (req.file) {
        userData.image = req.file.filename;
    }

    const user = new User(userData);
    user.generateToken();
    try {
        await user.save();
        return res.send({message: 'User registered ', user});
    } catch (error) {
        return res.status(400).send(error)
    }
});

router.get('/', auth, async (req, res) => {

    const users = await User.find();
    try {
        if (users) {
            return res.send(users);
        } else {
            return res.sendStatus(404);
        }

    } catch (error) {
        return res.status(400).send(error)
    }
});

router.post('/sessions', async (req, res) => {
    const user = await User.findOne({username: req.body.username});

    if (!user) {
        return res.status(400).send({error: 'User does not exist'});
    }

    const isMatch = await user.checkPassword(req.body.password);

    if (!isMatch) {
        return res.status(400).send({error: 'Password incorrect'});
    }

    user.generateToken();

    await user.save();

    res.send({message: 'Login successful ', user});
});


router.delete('/sessions', async (req, res) => {
    const token = req.get('Authorization');
    const success = {message: 'Logged out'};
    if (!token) {
        return res.send(success);
    }
    const user = await User.findOne({token});
    if (!user) {
        return res.send(success)
    }
    user.generateToken();
    await user.save();
    return res.send(success);
});

module.exports = router;
