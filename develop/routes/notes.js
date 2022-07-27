const notes = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readAndAppend, readFromFile } = require("../helpers/fsUtils");

// GET Route for retrieving all the notes
notes.get("/", (req, res) =>
	readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting notes
notes.post("/", (req, res) => {
	const { notes } = req.body;

	if (notes) {
		const newNotes = {
			notes,
			notes_id: uuidv4(),
		};

		readAndAppend(newNotes, "./db/db.json");

		const response = {
			status: "success",
			body: newNotes,
		};

		res.json(response);
	} else {
		res.json("Error in posting notes");
	}
});

module.exports = notes;
