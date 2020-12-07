const express = require("express");
const router = express.Router();
const chirpStore = require("../chirpstore.js");

router.get("/:id?", (req, res) => {
  let id = req.params.id;
  if (id) {
    res.send(chirpStore.GetChirp(id));
  } else {
    res.send(chirpStore.GetChirps());
  }
});

router.post("/", (req, res) => {
  console.log(req);
  chirpStore.CreateChirp(req.body);
  res.send("posted yo!");
});

router.put("/", (req, res) => {});

router.delete("/", (req, res) => {});

module.exports = router;
