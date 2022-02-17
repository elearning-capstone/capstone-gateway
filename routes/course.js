const express = require("express");
const axios = require("axios");
const { tokenVerifyMiddleware } = require("../middleware");
const router = express.Router();

const user_ip = "http://ip-172-31-33-253.ap-southeast-1.compute.internal:3000";

router.get("/", async (req, res) => {
    try {
        const response = await axios.get(user_ip + "/course");
        return res.json(response.data);
    } catch (err) {
        return res.status(err.response.status || 404).json(err.response.data || { message: "not found" });
    }
});

router.post("/register", tokenVerifyMiddleware, async (req, res) => {
    try {
        const response = await axios.post(user_ip + "/course/register", req.body, { params: req.query });
        return res.json({ message: "unimplemented" });
    } catch (err) {
        return res.status(err.response.status || 404).json(err.response.data || { message: "not found" });
    }
});

module.exports = router;