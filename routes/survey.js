const express = require("express");
const axios = require("axios");
const { tokenVerifyMiddleware } = require("../middleware");
const router = express.Router();

const user_ip = "http://ip-172-31-33-253.ap-southeast-1.compute.internal:3000";

router.get("/", tokenVerifyMiddleware, async (req, res) => {
    try {
        const response = await axios.get(user_ip + "/survey", { params: req.query });
        return res.json(response.data);
    } catch (err) {
        return res.status(err.response.status || 404).json(err.response.data || { message: "not found" });
    }
});

router.post("/", tokenVerifyMiddleware, async (req, res) => {
    try {
        const response = await axios.post(user_ip + "/survey", req.body, { params: req.query });
        return res.json(response.data);
    } catch (err) {
        return res.status(err.response.status || 404).json(err.response.data || { message: "not found" });
    }
});

router.get("/result", tokenVerifyMiddleware, async (req, res) => {
    try {
        const response = await axios.post(user_ip + "/survey/result", { params: req.query });
        return res.json(response.data);
    } catch (err) {
        return res.status(err.response.status || 404).json(err.response.data || { message: "not found" });
    }
});

router.post("/live_survey", tokenVerifyMiddleware, async (req, res) => {
    try {
        const response = await axios.post(user_ip + "/survey/live_survey", req.body, { params: req.query });
        return res.json(response.data);
    } catch (err) {
        return res.status(err.response.status || 404).json(err.response.data || { message: "not found" });
    }
});

module.exports = router;