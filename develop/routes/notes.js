const notes = require("express").Router();
// const { v4: uuidv4 } = require("uuid");
const uuid = require("../helpers/uuid");
const { readAndAppend, readFromFile } = require("../helpers/fsUtils");

// GET Route for retrieving all the notes
notes.get("/", (req, res) =>
	readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting notes
notes.post("/", (req, res) => {
	const { title, text } = req.body;

	if (title && text) {
		const newNotes = {
			title,
			text,
			id: uuid(),
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
