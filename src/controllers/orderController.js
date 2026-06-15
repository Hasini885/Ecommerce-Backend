const Order = require("../models/Order");

const createOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body);

        const populatedOrder = await Order.findById(order._id)
            .populate("user")
            .populate("products.product");

        res.status(201).json(populatedOrder);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getOrders = async (req, res) => {
    const orders = await Order.find()
        .populate("user")
        .populate("products.product");

    res.json(orders);
};

module.exports = {
    createOrder,
    getOrders
};