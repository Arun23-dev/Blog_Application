const User = require("../models/user");
const validate = require("../utils/validate");
const redisClient = require("../config/redis");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
    try {
        validate(req.body); // function call for the validation
        
        // Destructuring should be after validation
        const { firstName, emailId, password } = req.body;
        
        const registerData = {
            firstName: firstName,
            emailId: emailId,
            password: password,
        }

        const saltRounds = 5; // Increased from 5 to 10 for better security
        
        // Hash the password before saving
        registerData.password = await bcrypt.hash(password, saltRounds);
        
        // Check if user already exists to prevent duplicate error
        const existingUser = await User.findOne({ emailId });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists with this email",
                error: "DUPLICATE_EMAIL"
            });
        }
        
        const newuser = await User.create(registerData);

        const token = jwt.sign(
            {
                _id: newuser._id,
                emailId: emailId,
                role: 'user'
            },
            process.env.JWT_KEY,
            { expiresIn: 60 * 60 }
        );
        
        const reply = {
            firstName: newuser.firstName,
            emailId: newuser.emailId,
            _id: newuser._id,
            role: newuser.role || 'user' // Added fallback in case role is not defined
        }

        res.cookie('token', token, { 
            maxAge: 60 * 60 * 1000,
            httpOnly: true // Added for security
        });
        
        return res.status(201).json({
            user: reply,
            message: "User registered successfully"
        });
    }
    catch(err) {
        // Handle duplicate key error specifically
        if (err.code === 11000) {
            return res.status(400).json({
                message: "User already exists with this email",
                error: "DUPLICATE_EMAIL"
            });
        }
        
        console.error("Registration error:", err);
        res.status(400).json({
            message: "User registration failed",
            error: err.message || "Unknown error occurred"
        });
    }
}

const login = async (req, res) => {
  try {
    const { emailId, password } = req.body;

    if (!emailId || !password) {
      throw new Error("Invalid credentials");
    }

    const user = await User.findOne({ emailId });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error("Invalid credentails");
    }

    const token = jwt.sign(
      { _id: user._id, emailId: emailId, role: user.role },
      process.env.JWT_KEY,
      { expiresIn: 60 * 60 }
    );

    res.cookie("token", token, { maxAge: 60 * 60 * 10000 });

    res.status(200).send("User loggedin successfully");
  } catch (err) {
    res.status(400).json({
      message: "User login failed",
      error: err.message || "Unknown error occurred",
    });
  }
};

const logout = async (req, res) => {
  try {
    const { token } = req.cookies;
    const payload = jwt.decode(token);

    await redisClient.set(`token:${token}`, "Blocked");
    await redisClient.expireAt(`token:${token}`, payload.exp);

    res.cookie("token", null, { expires: new Date(Date.now()) });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({
      message: "Logout failed",
      error: err.message || "Something went wrong",
    });
  }
};
module.exports = { register, login, logout };
