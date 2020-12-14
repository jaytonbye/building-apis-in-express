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
  chirpStore.CreateChirp(req.body);
  res.send("Your chirp has been posted!");
});

router.put("/", (req, res) => {
  chirpStore.UpdateChirp(req.body.id, req.body.chirp);
  res.send("Your chirp has been updated!");
});

router.delete("/", (req, res) => {
  chirpStore.DeleteChirp(req.body.id);
  res.send("Your chirp has been deleted!");
});

module.exports = router;
