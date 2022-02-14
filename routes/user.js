const express = require("express");
const axios = require("axios");
const router = express.Router();

const user_ip = "http://i-09a9471f1fb723e78.ap-southeast-1.compute.internal:3000";

router.post("/register", async (req, res) => {
    try {
        const response = await axios.post(user_ip + "/", req.body);
        return res.json({ user: response.data.user });
    } catch (err) {
        return res.status(err.response.status).json(err.response.data)
    }
});

module.exports = router;