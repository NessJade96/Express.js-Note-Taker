# Express.js-Note-Taker

## Description

Is an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

## User setup:

N/A at this stage

## Planning Notes:

1. setup files

2. Create HTML routes (GET /notes should return the notes.html file.) & (GET \* should return the index.html file.)

3. Create API routes (GET /api/notes should read the db.json file and return all saved notes as JSON.) and & (POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).)

4. Add in js to have the save button, new notes button, and clicking on the already created notes on the left hand side to be functioning.

5. BONUS -> using the uuid make it so you can also delete / remove the saved notes.

## Screenshots:

![Finished product](./assets/images/) // need to add pictures.

## Links:

GitHub: https://github.com/NessJade96/Express.js-Note-Taker
Heroku:

## Commit notes:

1. Using the starter code provided I created the files and folder structure. Created my plan of attack. Made sure the css styling was applied to the notes page by added a fullstop in the css styling href. Linked the HTML routes in the server.js file.

2. Started to create the API for the notes. Still need to check if this is working properly. Added a few more planning notes.

3. http://localhost:3001/api/notes shows the db of notes as an object and renders them on the left hand side of the page.

4. Created the DELETE API call so users can delete / remove their notes. I did have troubles looking this up online, and I ended up changing the key id in the notes db and it now works :)
