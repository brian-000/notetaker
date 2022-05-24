//middleware
const router = require('express').Router();
var uniqid = require('uniqid');
const { filterByQuery } = require('../../lib/notes');
const notes = require('../../db/db.json');
// Require file system
const fs = require("fs");
// Require path - this allows us to access to path
const path = require("path");

function findById(id, notessArray) {
  const result = notessArray.filter(notes => notes.id === id)[0];
  return result;
}

router.post("/notes", (req, res) => {
  var newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uniqid()
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

router.delete("/notes/:id", (req, res) => {
  result = findById(req.params.id, notes);
  notes.forEach(element => {
    if(result.id == element.id){
      // notes.splice(element.id, 1);
      notes.splice(element,1);
    }
  });
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(notes)
  );
  res.json(notes);
});


module.exports = router;


