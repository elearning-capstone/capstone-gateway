const express = require("express");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const { tokenVerifyMiddleware } = require("../middleware");
const router = express.Router();

const user_ip = "http://ip-172-31-33-253.ap-southeast-1.compute.internal:3000";

router.post("/register", async (req, res) => {
    try {
        const response = await axios.post(user_ip + "/register", req.body);
        return res.json({ user: response.data.user });
    } catch (err) {
        return res.status(err.response.status || 404).json(err.response.data || { message: "not found" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const response = await axios.post(user_ip + "/login", req.body);
        const token = jwt.sign({ user_id: response.data.user_id }, "secret", { expiresIn: "7d" });
        return res.json({ token });
    } catch (err) {
        return res.status(err.response.status || 404).json(err.response.data || { message: "not found" });
    }
});

module.exports = router;