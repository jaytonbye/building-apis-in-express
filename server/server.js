const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes/index.js");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
