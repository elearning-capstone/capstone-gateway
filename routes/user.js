const express = require("express");
const axios = require("axios");
const router = express.Router();

const user_ip = "http://i-09a9471f1fb723e78.ap-southeast-1.compute.internal:3000";

router.post("/", async (req, res) => {
    const response = await axios.post(user_ip + "/", req);
    console.log(response);
    return res.json({ message: "OK" });
});

module.exports = router;