/* */
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
const serveIndexFile = (req, res) => {}

const serveNotesFile = (req, res) => {}

// const notesById = (req, res) => {}

const getNotes = (req, res) => {}

const createNotes = (req, res) => {}

const deleteNotes = (req, res) => {}

// ROUTES
app.get("/", serveIndexFile); // load homepage
app.get("/notes", serveNotesFile); //load notes
// app.get("/notes/:id", notesById);
app.get("/api/notes", getNotes); //read db.json file
app.post("/api/notes", createNotes); //receive new note and push to db.json
app.delete("/api/notes/:id", deleteNotes); // delete  selected notes

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});