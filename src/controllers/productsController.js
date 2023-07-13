const productsService = require("../services/productsService");

exports.getProducts = async (req, res) => {
  try {
    const response = await productsService.getProducts();
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.getProductsById = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await productsService.getProductById(id);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.getCategoires = async (req, res) => {
  try {
    const response = await productsService.getCategories();
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.getProductsByCategorie = async (req, res) => {
  const categorie = req.params.categorie;
  try {
    const response = await productsService.getProductByCategory(categorie);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
