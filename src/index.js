const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
const connectMongo = require("./db");

app.use(cors());

const productsRoutes = require("./routes/products");
const userRoutes = require("./routes/users");

app.use("/", productsRoutes);
app.use("/", userRoutes);

connectMongo();

app.listen(3001, () => {
  console.log("Server run on port " + 3001);
});
