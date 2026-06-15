const Product = require("../models/Product");

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

module.exports = {
    createProduct,
    getProducts
};