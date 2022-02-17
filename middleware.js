const jwt = require("jsonwebtoken");

exports.tokenVerifyMiddleware = async (req, res, next) => {
    const token = (req.headers['authorization'] || '').split('Bearer ')[1];
    try {
        var user = jwt.verify(token, 'secret');
    } catch (err) {
        return res.status(403).json({ message: err.name });
    }

    req.query.user_id = user.user_id;
    req.query.role = user.role;
    next();
};