const express = require("express");
const app = express();

app.use(express.static("public"));
const allRoutes = require("./routes")