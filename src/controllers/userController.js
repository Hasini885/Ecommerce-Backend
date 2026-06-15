const User = require("../models/User");

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

module.exports = {
    createUser,
    getUsers
};