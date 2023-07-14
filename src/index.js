const express = require("express");
const app = express();
const cors = require("cors");
const connectMongo = require("./db");

app.use(cors());
app.use(express.json());

connectMongo();
const productsRoutes = require("./routes/products");
const userRoutes = require("./routes/users");

app.use("/", productsRoutes);
app.use("/", userRoutes);

app.listen(3001, () => {
  console.log("Server run on port " + 3001);
});
