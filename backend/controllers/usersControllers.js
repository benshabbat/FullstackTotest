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