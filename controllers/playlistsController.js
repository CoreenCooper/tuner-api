const express = require("express");
const songsController = require("./songsController");
const playlists = express.Router();
const {
  getAllPlaylists,
  getPlaylist,
  addPlaylist,
  updatePlaylist,
  deletePlaylist,
} = require("../queries/playlists");

// ROUTES
// nested route
playlists.use("/:playlist_id/songs", songsController);

// index
playlists.get("/", async (req, res) => {
  const allPlaylists = await getAllPlaylists();
  console.log(allPlaylists)
  res.json(allPlaylists);
});

// create
playlists.post("/", async (req, res) => {
  const playlist = req.body;
  const newPlaylist = await addPlaylist(playlist);
  res.json(newPlaylist);
});

// show
playlists.get("/:id", async (req, res) => {
  const { id } = req.params;
  const playlist = await getPlaylist(id);
  res.json(playlist);
});

// update
// not working
playlists.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { name } = body;
//   console.log(body)

  if (!name) {
    res.status(422).json({
      error: true,
      success: false,
      message: "invalid entry",
    });
  } else {
    const updatedPlaylist = await updatePlaylist(params.id, body);
    res.json(updatedPlaylist);
  }
});

// delete
playlists.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPlaylist = await deletePlaylist(id);
  res.json(deletedPlaylist);
});

module.exports = playlists;
