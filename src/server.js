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
app.use("/public", express.static(__dirname + "/public"));
app.set({
  "Access-Control-Allow-Origin": "*",
  "X-Content-Type-Options": "nosniff",
});

// functions

const cssFile = (req, res) => {
  const filePath = path.join(__dirname, "/public/css/styles.css");
  console.log(req.body);
  console.log(filePath);
  res.sendFile(filePath);
};
const jsFile = (req, res) => {
  const filePath = path.join(__dirname, "/public/js/index.js");
  res.sendFile(filePath);
};
const serveIndexFile = (req, res) => {
  const filePath = path.join(__dirname, "/index.html");
  res.sendFile(filePath);
};

const serveNotesFile = (req, res) => {
  const filePath = path.join(__dirname, "/notes.html");

  res.sendFile(filePath);
};

// const notesById = (req, res) => {
// const directory = path.resolve(__dirname, "");
// const filePath = path.join(directory, "");
//res.send()
// };

//middleware to grab data from database
const getNotesData = async () => {
  const notesFilePath = path.join(__dirname, "/db/db.json");
  const notesData = await readFileAsync(notesFilePath, "utf-8");
  const parsedNotes = JSON.parse(notesData);
  return parsedNotes;
};

const writeNotes = async (theNotes) => {
  const notesFilePath = path.join(__dirname, "/db/db.json");
  await writeFileAsync(notesFilePath, JSON.stringify(theNotes));
};
const getNotes = async (req, res) => {
  const notes = await getNotesData();
  res.json(notes);
};
const addId = (data) => {
  let id = data.length;
  id++;
  return id;
};
//create note then add it onto the notes page
const createNotes = async (req, res) => {
  const newNotes = req.body;
  console.log(newNotes);
  const notes = await getNotesData();
  const notesValue = addId(notes);
  console.log(notesValue);
  notes.push({
    id: notesValue,
    title: req.body.title,
    text: req.body.text,
  });
  await writeNotes(notes);
  serveNotesFile(req, res);
  // res.json(newNotes);
};

const deleteNotes = async (req, res) => {
  const filePath = path.join(__dirname, "/notes.html");
  const notesFilePath = path.join(__dirname, "/db/db.json");
  const notesData = await readFileAsync(notesFilePath, "utf-8");
  const parsedNotes = JSON.parse(notesData);
  //add function to delete notes by id number
  parsedNotes.splice(parsedNotes[req.params.id], 1);
  await writeFileAsync(notesFilePath, JSON.stringify(parsedNotes));
  res.sendFile(filePath);
  //or should it be serveNotesFile(req, res)
};

// ROUTES
app.get("/", serveIndexFile); // load homepage
app.get("/notes", serveNotesFile); //load notes
// app.get("/notes/:id", notesById);
app.get("/public", cssFile);
app.get("/public", jsFile);
// app.get("public/css/styles.css", cssFile);
// app.get("public/js/index.js", jsFile);
app.get("/api/notes", getNotes); //read db.json file
app.post("/api/notes", createNotes); //receive new note and push to db.json
app.delete("/api/notes/:id", deleteNotes); // delete  selected notes
//might have to chenge app.delete to a jquery delete function using parent like previous homework
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
