const express = require("express");
const cors = require("cors");
const productRoutes = require("./src/routes/product.routes");


const app = express();

app.use(cors({
    origin: "*",
  }));

app.use(express.json());
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "API Working"
  });
});

module.exports = app;