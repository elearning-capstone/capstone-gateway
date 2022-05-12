const express = require("express");
const axios = require("axios");
const { tokenVerifyMiddleware } = require("../middleware");
const router = express.Router();

const user_ip = "http://ip-172-31-33-253.ap-southeast-1.compute.internal:3000";

router.get("/", tokenVerifyMiddleware, async (req, res) => {
    try {
        const response = await axios.get(user_ip + "/live", { params: req.query });
        return res.json(response.data);
    } catch (err) {
        return res.status(err.response.status || 404).json(err.response.data || { message: "not found" });
    }
});

router.post("/survey", tokenVerifyMiddleware, async (req, res) => {
    try {
        const response = await axios.post(user_ip + "/live/survey", req.body, { params: req.query });
        return res.json(response.data);
    } catch (err) {
        return res.status(err.response.status || 404).json(err.response.data || { message: "not found" });
    }
});

router.get("/sync", tokenVerifyMiddleware, async (req, res) => {
    try {
        const response = await axios.get(user_ip + "/live/sync", { params: req.query });
        return res.json(response.data);
    } catch (err) {
        return res.status(err.response.status || 404).json(err.response.data || { message: "not found" });
    }
});

router.post("/chat", tokenVerifyMiddleware, async (req, res) => {
    try {
        const response = await axios.post(user_ip + "/live/chat", req.body, { params: req.query });
        return res.json(response.data);
    } catch (err) {
        return res.status(err.response.status || 404).json(err.response.data || { message: "not found" });
    }
});

router.post("/reaction", tokenVerifyMiddleware, async (req, res) => {
    try {
        const response = await axios.post(user_ip + "/live/reaction", req.body, { params: req.query });
        return res.json(response.data);
    } catch (err) {
        return res.status(err.response.status || 404).json(err.response.data || { message: "not found" });
    }
});

router.post("/", tokenVerifyMiddleware, async (req, res) => {
    try {
        const response = await axios.post(user_ip + "/live/", req.body, { params: req.query });
        return res.json(response.data);
    } catch (err) {
        return res.status(err.response.status || 404).json(err.response.data || { message: "not found" });
    }
});

router.put("/info", tokenVerifyMiddleware, async (req, res) => {
    try {
        const response = await axios.put(user_ip + "/live/info", req.body, { params: req.query });
        return res.json(response.data);
    } catch (err) {
        return res.status(err.response.status || 404).json(err.response.data || { message: "not found" });
    }
});

router.delete("/", tokenVerifyMiddleware, async (req, res) => {
    try {
        const response = await axios.delete(user_ip + "/live", { params: req.query });
        return res.json(response.data);
    } catch (err) {
        return res.status(err.response.status || 404).json(err.response.data || { message: "not found" });
    }
});

module.exports = router;