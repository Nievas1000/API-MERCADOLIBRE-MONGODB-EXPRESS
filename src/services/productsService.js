const { default: axios } = require("axios");

exports.getProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getProductById = async (id) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCategories = async () => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getProductByCategory = async (categorie) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${categorie}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
