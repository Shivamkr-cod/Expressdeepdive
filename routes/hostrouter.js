const path = require("path");
const express = require("express");

const hostrouter = express.Router();
const rootdir=require('../utils/pathutil');

hostrouter.get("/host/add-home", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "addhome.html"));
});

const registerhomes=[];
hostrouter.post("/host/add-home", (req, res, next) => {
  console.log("home registration successful for:",req.body,req.body.housename);
  registerhomes.push({housename:req.body.housename});

  res.sendFile(path.join(rootdir, "views", "homeadded.html"));
});

// module.exports = hostrouter;

exports.hostrouter = hostrouter;
exports.registerhomes = registerhomes;
