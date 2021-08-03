// dependencies
const cors = require("cors");
const express = require("express");
const playlistsController = require("./controllers/playlistsController");

// configuration
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// ROUTES
// root
app.get("/", (req, res) => {
  res.send("Welcome to the Tuner App");
});

app.use("/playlists", playlistsController);

// catch all
app.get("/*", (req, res) => {
  res.status(404).send("Page not found");
});

// export
module.exports = app;