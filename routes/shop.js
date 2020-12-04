const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

// router.get("/", shopController.getIndex);

// router.get("/products", shopController.getProduct);

// // router.get("/products/delete");

// router.get("/products/:productId", shopController.getParticularProduct);

// router.get("/cart", shopController.getCart);

// router.post("/cart", shopController.postCart);

// router.post("/cart-delete-item", shopController.postCartDeleteProduct);

// router.post("/create-order", shopController.postOrder);

// router.get("/orders", shopController.getOrders);

// router.get("/checkout", shopController.getCheckout);

module.exports = router;

// router.get("/", (req, res, next) => {
//     const products = adminData.products;
//     res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
//     // console.log('shop.js', adminData.products);
//     // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
//   });
