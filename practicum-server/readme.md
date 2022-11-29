# Introduction

This server will run the backend operations associated with our practicum's deliverables.

---

# Server set-up Instructions

After cloning the repo:

1. cd into `practicum-server` folder.
2. Run `npm install`
3. Make sure port 3006 is free (this has been hardcoded on both the client and server as the port on which the server will run).
4. Run `npm run start`

# Packages used and initial creation steps:

The server was initially set up through the following steps:

1. `npm init -y` - creates a package.json file in the folder.
2. `npm install body-parser cors express mongoose nodemon`. body-parser is a package used to make post requests. Recall that nodemon automatically restarts the server whenever there's a change. Mongoose is what we'll be using to create the models
3. package.json file was modified by adding a start script, so the server can be started by running `npm run start`, which triggers the `nodemon index.js` shell command.

# MongoDB Details

- MongoDB creds:
- Username: wallaceanselsuyash
- Pwd: cs6440practicum
- Database: cs6440-practicum.

The above credentials have been hardcoded into the `CONNECTION_URL` variable in the index.js file (which is not best practice).

For simplicity of collaboration, the MongoDB server was set-up to allow access from any IP address, in case teammates have dynamic IPs and such.

Right now, the only collection that exists in the database is the `feedbacks` collection, where a new document is created everytime it's posted on the frontend.

# Endpoints

## Fetch list of feedback objects available

- Type: GET
- Endpoint: http://34.125.120.160:3006/feedback

## Create feedback:

- Type: POST
- Endpoint: http://34.125.120.160:3006/feedback
- Body: (Refer to Postman Collection)

# References

This video series was used as a reference for a lot of parts of the server set-up, including connecting the server to MongoDB, and setting up a folder structure for the server's controllers (which hold the logic for each API):
https://www.youtube.com/watch?v=ngc9gnGgUdA

Note that the above video bounces back and forth between the server (backend) and client (frontend) setup, so here are a few key timestamps specific to the server-setup:

- 3:57 - Initial server setup
- 9:20 - Continuation of server setup, including initialization of the express app.
- 10:27 - MongoDB introduction
- 13:45 - Connecting to MongoDB
- 15:50 - Creating routes
- 18.50 - Setting up folder structure for the backend (controllers). Controllers will hold the logic for the APIs, so the callback functions in the routes file don't get bloated. Also heads up - in node, unlike in React, when exporting a function from a file, you have to include the .js suffix (e.g. `import { getPosts } from "../controllers/posts.js";`)
- 21:00 - Creating models. With mongodb, a schema is outlined to give a structure requirement to the documents.
- 24:01 - Adding function and route to create feedback submissions.
