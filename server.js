const express = require("express");
const fishRoutes = require('./routes/fishRoutes');
const recipesRoutes = require('./routes/recipesRoutes');
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to fish2eat API!!");
});

app.use('/api/fish', fishRoutes);
app.use('/api/recipes', recipesRoutes);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
