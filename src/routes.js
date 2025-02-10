const express = require("express");
const router = express.Router();

// List routes
router.use("/books", require("./modules/book"));

module.exports = router;
