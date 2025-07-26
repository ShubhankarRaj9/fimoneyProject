const express = require("express");
const router = express.Router();

const {addProducts,updateQuantity,getProducts} = require("../controllers/productController");
const authenticate = require("../middleware/authMiddleware");
console.log("addProducts is a", typeof addProducts);      
console.log("authenticate is a", typeof authenticate);    


router.post("/products", authenticate, addProducts);

router.put("/products/:id/quantity", authenticate, updateQuantity);

router.get("/products", authenticate, getProducts);

module.exports = router;