const express = require('express');
const cors = require("cors");

const dotenv = require('dotenv');
const {connectDb} = require("./config/database");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

dotenv.config();

const app = express();

app.use("/api-docs",swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(cors());
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
app.use("/",authRoutes);
const productRoutes = require("./routes/productRoutes");
app.use("/",productRoutes);


connectDb();

module.exports = app;
