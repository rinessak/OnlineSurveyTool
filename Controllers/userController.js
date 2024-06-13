const User = require("../Models/user");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
 
const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findOne({ _id: id });
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const createUser = async (req, res) => {
    const { username, email, password } = req.body;

    // Check for required fields
    if (!username || !email || !password) {
        return res.status(400).json({ message: "Required fields are missing" });
    }

    try {
        // Check for duplicate email
        const existingUserByEmail = await User.findOne({ email });
        if (existingUserByEmail) {
            return res.status(409).json({ message: "User with this email already exists" });
        }

        // Create a new user object with the provided data
        const newUser = await User.create({
            username,
            email,
            password,
        });

        res.status(201).json(newUser);

    } catch (error) {
        // Handle internal server errors
        res.status(500).json({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findOneAndDelete({ _id: id });
        res.status(204).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


module.exports = { getAllUsers, getSingleUser, createUser, updateUser, deleteUser };

