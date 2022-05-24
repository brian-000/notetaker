//middleware
const router = require('express').Router();
// router.use(require('./zookeepersRoutes'));
const { filterByQuery } = require('../../lib/notes');
const { notes } = require('../../db/db');
// Require file system
const fs = require("fs");
// Require path - this allows us to access to path
const path = require("path");


router.get("/notes", (req, res) => {
    // Set results equal to notes
  
    // Set response equal to JSON(results)
    res.sendFile(path.join(__dirname, "../../db/db.json"));
  });

module.exports = router;


