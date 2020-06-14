# Hints and Tips :tada:

1. The _TLDR_ of this application is that we're creating a note taking app, it can be hard to keep track of the different thoughts and opinions in a meeting!

1. We're going to be using some CRUD (Create, Read, Update, Delete which map to POST, GET, PUT, DELETE) operations which are the Get, Post, Delete.

1. You're already given the frontend here, so it means we just need to hook everything up so the frontend will update!

1. It's important to process what the frontend is doing, make yourself familiar as it's going to be making calls to your backend, the frontend is essentially your tests/ folder :wink:

   > All it's doing is using jQuery to process the data, normally we're hooking up the jQuery, this time we're getting the data!

1. You're not given any JavaScript files so we need to define the structure of the folders and the files according to the routes we require.

# Submission Checklist :rocket:

1. Ensure that you submit both a link to your homework repo and a video of your application working!

   > Check for sneaky console errors and leftover console logs!

1. All the tests must pass!

1. Ensure what you've submitted works when you grade it yourself against the:

   - The user stories provided
   - The acceptance criteria's provided.

1. Make sure your homework repo has a quality README that _you_ have written, and provide screenshots **and a github video of your application working!**

   - To do this there's lots of screen capture software available however the standard operating system should work fine:

     1. Mac OS: You should be able to use QuickTime player to screen record.
     1. Windows: You should be able to use a built in Screen Recorder as part of the Windows Game Bar, https://betanews.com/2019/01/14/windows-10-screen-recorder-ultility/

     > If neither of these work then a safe bet is to look at OBS but the UI can be a bit clunky at first :thumbsup:

   - Probably easiest to leave this video in Google Drive and keep it out of Git, especially if it's a massive file!

1. Commit after most changes, all that code doesn't just appear first time :wink:

1. **Comment that JavaScript code :pray:**



NOTES FOR TODAY:
Write, Save, Delete Notes.
Express, Node backend -> Some helpful starter slack resources for that.
localhost:3000
(*) or / return index.html YEP
/notes GET should return notes.html YEP
fs package to write and read our notes. db.json. READ YEP, WRITE YEP
GET /api/notes - Should read the db.json file and return all saved notes as JSON. YEP
POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. YEP, 
-> Note {} , append to db.json - return json body. YEP
DELETE /api/notes/:id
all notes need to have an id
find the note with the id given by the route
remove/slice out of notes array.
Update the db.json
Probably send something back to the user to say hey that worked!
Submission: URL of the deployed Heroku application, dont send link to Heroku Dashboard Naughty!
Github.
<STEPS TO SUCCESS>
Step 1: Steal that starter express code from activity or slack
Step 2: Return index.html for the server '/'
Step 3: Return notes.html for the server '/notes'
Step 3a: Return notes.html with the notes out of our 'database' db.json
Step 3b: Should have no console errors for the js and css of the html files
Step 3c: Should be able to navigate from index.html to notes.html.
Pat yourself on the back, celebrate.
Step 4: Implement GET for /api/notes. Use Fs to read our db.json, return a json object with an array of notes.
Step 5: Implement POST for /api/notes. We'd take a body from our request with `title` and `text`, make a note object from that data.
Manipulate the data, add an id (be careful of what the most recent id used in the notes was), append that to our noteStore (db.json), maybe write over it?
Step 6: Return new note response to the client, maybe the note object and a status code. Potentially not consumed by the client?
Step 7: Delete that note! /api/notes/:id <- id of the note as a path parameter, look up that note, and then we remove that note from the note store?
-> Potentially splice() out of the notes array -> .find(), Do the fs dance, and update our db.json -> send 20* to say hey that worked!
Step 8: Test everything
Step 9: Remove console logs
Step 10: Assuming we're up to date with master, do the heroku dance and deploy it to heroku and add the link to the homework README.
