const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);
app.use(express.static(path.join(__dirname, "../client")));

app.listen(3000, () => {
  console.log("listening on port 3000");
});
