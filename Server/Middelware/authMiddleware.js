const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next, role = null) => {
    console.log("Headers received:", req.headers); // Debugging request headers

    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(403).json({ success: false, message: "No token provided" });
    }

    const token = authHeader.split(" ")[1]; // Extracting token after "Bearer"
    let key;

    if (role === "Admin") {
        key = process.env.JWT_SALT_KEY_ADMIN;
    } else if (role === "Buyer") {
        key = process.env.JWT_SALT_KEY_BUYER;
    } else {
        return res.status(403).json({ success: false, message: "Invalid role" });
    }

    jwt.verify(token, key, (err, decoded) => {
        if (err) {
            return res.status(401).json({ success: false, message: "Unauthorized: Invalid token" });
        }

        if (role && decoded.data.role !== role) {
            return res.status(403).json({ success: false, message: `Access denied for ${role}` });
        }

        req.user = decoded.data;
        next();
    });
};

// Middleware for Admin
const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, "Admin");
};

// Middleware for Buyer
const verifyBuyer = (req, res, next) => {
    verifyToken(req, res, next, "Buyer");
};

const verifyUser = (req, res, next) => {
    console.log("Headers received:", req.headers);

    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(403).json({ success: false, message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    let decodedUser = null;

    try {
        decodedUser = jwt.verify(token, process.env.JWT_SALT_KEY_ADMIN);
    } catch (err) {
        try {
            decodedUser = jwt.verify(token, process.env.JWT_SALT_KEY_BUYER);
        } catch (err) {
            return res.status(401).json({ success: false, message: "Unauthorized: Invalid token" });
        }
    }

    if (!decodedUser) {
        return res.status(401).json({ success: false, message: "Unauthorized: Invalid token" });
    }

    req.user = decodedUser.data; // Attach user data to request
    next();
};

module.exports = { verifyAdmin, verifyBuyer, verifyUser };
