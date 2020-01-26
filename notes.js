const fs = require("fs");
const chalk = require("chalk");

const getNotes = function() {
  return "Your Notes iss ";
};

const addNotes = function(title, body) {
  // load notes
  // check if title is taken
  // if title is not taken, add this new note
  // save note
  var notes = loadNotes();
  var duplicateNotes = notes.filter(function(note) {
    return note.title == title;
  });

  if (duplicateNotes.length == 0) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log("new note added");
  } else {
    console.log("title is already there");
  }
};

const removeNote = function(title) {
  var notes = loadNotes();
  

  var newNotes = notes.filter(function(note) {
    return note.title != title;
  });

  if (notes.length === newNotes.length) {
    console.log(chalk.red.inverse("no changes Made"));
  } else {
    console.log(notes.length - newNotes.length + " notes deleted");
    saveNotes(newNotes);
    console.log(chalk.green.inverse("changes made"));
  }
};

const saveNotes = function(notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote
};
