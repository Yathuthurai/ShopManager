const path = require("path");

const express = require("express");

const productController = require("../controllers/product");

const router = express.Router();

router.get("/", productController.getProduct);

module.exports = router;

// router.get("/", (req, res, next) => {
//     const products = adminData.products;
//     res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
//     // console.log('shop.js', adminData.products);
//     // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
//   });
