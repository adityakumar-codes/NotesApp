# NotesApp
Notes app made from what I learnt in Udemy Node JS course

This code was taught by Andrew Mead 
here's a link to their course :-
https://www.udemy.com/share/101WGiCEYacVZSQHg=/

clone the directory
You can do the following

1) node app.js add --title="Sometitle" --body="some text" //Add a note
2) node app.js remove --title="Sometitle" //Remove a note
3) node app.js list //List all the nodes
4) node app.js read --title="sometitle" // Read the note with given title.


Small Description :

-app.js basically tells what command does what. we used yargs module to pass through command line arguments and assignedhandler functiion to each command
-notes.js basically is where these handler functions are defined. The functions are imported by app.js from notes.js.
-notes.json is where all the notes are stored in .json format.
