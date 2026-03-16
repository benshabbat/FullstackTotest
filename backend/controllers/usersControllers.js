import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(
            users.map(user => ({
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                role: user.role,
            }))

        );
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({
            id: user._id,
            fullName: user.fullName,
            email: user.email,
            role: user.role,
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error });
    }
}

export const updateUser = async (req, res) => {
    try {
        const { fullName, email, role } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,  
            { fullName, email, role },
            { new: true }
        );  
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({
            id: user._id,
            fullName: user.fullName,
            email: user.email,
            role: user.role,
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
}

export const deleteUser = async (req, res) => { 
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
}

