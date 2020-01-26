const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");
//const msg = getNotes();

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNotes(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "this command removes a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
    handler: function(argv) {

    notes.removeNote(argv.title)
    }
  
});

yargs.command({
  command: "read",
  describe: "this command reads notes",
  handler: function() {
    console.log("reading");
  }
});

yargs.parse();
