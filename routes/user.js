const express = require("express");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const router = express.Router();

const user_ip = "http://i-09a9471f1fb723e78.ap-southeast-1.compute.internal:3000";

const tokenVerifyMiddleware = async (req, res, next) => {
    const token = (req.headers['authorization'] || '').split('Bearer ')[1];
    try {
        var user_id = jwt.verify(token, 'secret');
    } catch (err) {
        return res.status(403).json({ message: err.name });
    }

    req.user_id = user_id;
    next();
}

router.post("/register", async (req, res) => {
    try {
        const response = await axios.post(user_ip + "/register", req.body);
        return res.json({ user: response.data.user });
    } catch (err) {
        return res.status(err.response.status).json(err.response.data)
    }
});

router.post("/login", async (req, res) => {
    try {
        const response = await axios.post(user_ip + "/login", req.body);
        return jwt.sign(response.data.user_id, "secret", { expiresIn: '7d' });
    } catch (err) {
        return res.status(err.response.status).json(err.response.data)
    }
});

module.exports = router;