import User from "../models/User.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
    try{
        const { fullName, email, password ,...rest} = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        // Create a new user
        const newUser = await User.create({ fullName, email, password: hashedPassword ,...rest });

        res.status(201).json({ message: "User registered successfully" ,newUser});
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}