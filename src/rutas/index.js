const express = require("express");
const route = express.Router();


route.get("/", function(req, res){
    res.render("index.ejs");
});

module.exports = route;
//primera vercion de este proyecto