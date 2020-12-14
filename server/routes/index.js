const express = require("express");
const chirpsRouter = require("./chirps.js");

const router = express.Router();

router.use("/chirps", chirpsRouter);

router.get("/", (req, res) => {
  res.send("you hit /api");
});

router.use("*", (req, res) => {
  res.send("sorry, incorrect route");
});

module.exports = router;
