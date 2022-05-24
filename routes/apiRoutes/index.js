//middleware
const router = require('express').Router();
const { filterByQuery } = require('../../lib/notes');
const notes = require('../../db/db.json');
// Require file system
const fs = require("fs");
// Require path - this allows us to access to path
const path = require("path");

router.post("/notes", (req, res) => {
  var newNote = {
    title: req.body.title,
    text: req.body.text
  }

  notes.push(newNote);

  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(notes)
  );
  res.json(newNote);

});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../db/db.json"));

});
module.exports = router;


