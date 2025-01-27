const express = require('express');
const dotenv = require('dotenv').config();
const CryptoJS = require('crypto-js'); // Ensure correct capitalization

const router = express.Router();

// Example route
router.get('/app', (req, res) => {
    res.send('Welcome to the router!');
});

// User login route
router.post('/login', async (req, res) => {
    try {
        const { userName, password } = req.body;

        // Example: Encrypted password and decryption key
        const secretKey = process.env.SECREAT_PASS;
        const decryptedPassword = CryptoJS.AES.decrypt(password, secretKey).toString(CryptoJS.enc.Utf8);

        // Check user credentials (mock implementation)
        if (userName === "admin" && decryptedPassword === "admin123") {
            res.status(200).json({ message: "Login successful!" });
        } else {
            res.status(401).json({ message: "Invalid credentials!" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error!" });
    }
});

module.exports = router;
