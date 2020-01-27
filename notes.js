const fs = require("fs");
const chalk = require("chalk");

///////////////////***NON EXPORT FUNCTIONS***///////////////////////////////////////////////////

const saveNotes = notes => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = () => {
  try {
    debugger;
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};
//////////////////////////////////////////////////////////

///////////////////////***EXPORT FUNCTIONS****//////////////////////////////////

const addNotes = (title, body) => {
  var notes = loadNotes();
  var duplicateNotes = notes.find(note => note.title == title);

  if (duplicateNotes === undefined) {
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

const removeNote = title => {
  var notes = loadNotes();
  var newNotes = notes.filter(note => note.title != title);

  if (notes.length === newNotes.length) {
    console.log(chalk.red.inverse("no changes Made"));
  } else {
    console.log(notes.length - newNotes.length + " notes deleted");
    saveNotes(newNotes);
    console.log(chalk.green.inverse("changes made"));
  }
};

const listNotes = () => {
  var notes = loadNotes();

  notes.forEach(note => {
    console.log(chalk.redBright(chalk.green.bold(note.title) + "\n"));
  });
};

const readNote = title => {
  var notes = loadNotes();
  var note = notes.find(note => note.title === title);
  try {
    console.log(chalk.bold.black(note.title) + "\n" + note.body);
  } catch (e) {
    console.log(chalk.redBright("No note with title " + title));
  }
};

////////////////////////////////////////////////////////

module.exports = {
  addNotes: addNotes,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
