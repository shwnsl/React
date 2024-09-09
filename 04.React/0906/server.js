const express = require("express");
const app = express();
// body-parser
app.use(express.json());
const cors = require('cors');
app.use(cors());
const index = require("./router/index.js");
app.use("/", index);
app.listen(3000, () => console.log("Server is running on 127.0.0.1:3000"));

