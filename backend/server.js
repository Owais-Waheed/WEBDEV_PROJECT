require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/complaints", require("./routes/complaints"));

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("Connected to MongoDB");
  app.listen(5000, () => console.log("Server started on port 5000"));
});
