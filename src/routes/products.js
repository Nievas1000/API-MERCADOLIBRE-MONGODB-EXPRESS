const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.route("/products").get(productsController.getProducts);
router.route("/product/:id").get(productsController.getProductsById);
router.route("/categories").get(productsController.getCategoires);
router
  .route("/categorie/:categorie")
  .get(productsController.getProductsByCategorie);

module.exports = router;
