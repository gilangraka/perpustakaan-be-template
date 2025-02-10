const express = require("express");
const cors = require("cors");
const methodOverride = require("method-override");
const routes = require("./src/routes");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride("_method"));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
