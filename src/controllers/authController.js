const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const register = async (req, res) => {
    try {
        //destructuring
        const { username, password, role } = req.body;
        //hashing the pw
        const hashedPW = await bcrypt.hash(password, 12);
        //creating the new user
        const newUser = await User.create({
            username,
            password: hashedPW,
            role,
        });
        //response on success
        res.status(201).json({
            message: `User registerd with username: ${username}`,
        });
    } catch (error) {
        //response on success
        res.status(500).json({
            message: `Something went wrong. Error message: ${error.message}`,
            error,
        });
    }
};

const login = async (req, res) => {
    try {
        //destructuring
        const { username, password } = req.body;
        //find the user
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({
                message: `User: ${username} not found`,
            });
        }
        //matching the password
        const isMatchedPW = await bcrypt.compare(password, user.password);
        if (!isMatchedPW) {
            return res.status(400).json({
                message: `Invalid credentials`,
            });
        }
        //genearte the token jwt
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        //response on a success login
        res.status(200).json({
            message: `Successfully logged in user: ${username}`,
            token,
        });
    } catch (error) {
        res.status(500).json({
            message: `Something went wrong. Error message: ${error.message}`,
            error,
        });
    }
};

module.exports = { register, login };
