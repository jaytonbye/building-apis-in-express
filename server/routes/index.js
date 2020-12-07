const express = require("express");
const chirpsRouter = require("./chirps.js");

const router = express.Router();
/*
router.use("/", (req, res) => {
  res.send("some nonsense");
});
*/
router.use("/chirps", chirpsRouter);

module.exports = router;
