const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./src/routes/userRoute");
const productRoutes = require("./src/routes/productRoute");
const orderRoutes = require("./src/routes/orderRoute");

const app = express();

// Middleware
app.use(express.json());

// Database Connection
mongoose
    .connect("mongodb://127.0.0.1:27017/ecommerce")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// Routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("E-Commerce API Running");
});

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});