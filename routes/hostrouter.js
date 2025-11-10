const path = require("path");
const express = require("express");

const hostrouter = express.Router();
const rootdir=require('../utils/pathutil');

hostrouter.get("/host/add-home", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "addhome.html"));
});
hostrouter.post("/host/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootdir, "views", "homeadded.html"));
});

module.exports = hostrouter;
