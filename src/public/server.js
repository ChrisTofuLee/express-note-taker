const express = require("express");
const path = require("path");
const fs = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(fs.readFile);

const writeFileAsync = promisify(fs.writeFile);
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// functions

const serveIndexFile = (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  res.sendFile(filePath);
};

const serveNotesFile = (req, res) => {
  const filePath = path.join(__dirname, "notes.html");

  res.sendFile(filePath);
};

// const notesById = (req, res) => {
// const directory = path.resolve(__dirname, "");
// const filePath = path.join(directory, "");
//res.send()
// };

//middleware to grab data from database
const getNotesData = async () => {
  const notesFilePath = path.join(__dirname, "../db/db.json");
  const notesData = await readFileAsync(notesFilePath, "utf-8");
  const parsedNotes = JSON.parse(notesData);
  return parsedNotes;
};

const writeNotes = async (theNotes) => {
  const notesFilePath = path.join(__dirname, "../db/db.json");
  await writeFileAsync(notesFilePath, JSON.stringify(theNotes));
};
const getNotes = async (req, res) => {
  const notes = await getNotesData();
  res.json(notes);
};
//create note then add it onto the notes page
const createNotes = async (req, res) => {
  const newNotes = req.body;
  console.log(newNotes);
  const notes = await getNotesData();
  notes.push(newNotes);
  await writeNotes(notes);
  res.send("");
};

const deleteNotes = async (req, res) => {
  const notesFilePath = path.join(__dirname, "../db/db.json");
  const notesData = await readFileAsync(notesFilePath, "utf-8");
  const parsedNotes = JSON.parse(notesData);
  //add function to delete notes by id number

  await writeFileAsync(notesFilePath, JSON.stringify(freshNotesString));
  getTables(req, res);
  //or should it be serveNotesFile(req, res)
};

// ROUTES
app.get("/", serveIndexFile); // load homepage
app.get("/notes", serveNotesFile); //load notes
// app.get("/notes/:id", notesById);
app.get("/api/notes", getNotes); //read db.json file
app.post("/api/notes", createNotes); //receive new note and push to db.json
app.delete("/api/notes/:id", deleteNotes); // delete  selected notes
//might have to chenge app.delete to a jquery delete function using parent like previous homework
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
