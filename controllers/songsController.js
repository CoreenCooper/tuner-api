const express = require("express");
const songs = express.Router({ mergeParams: true });
const {
  getAllSongs,
  getSong,
  addSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

// ROUTES
// index
songs.get("/", async (req, res) => {
  const { playlist_id } = req.params;
  // console.log(playlist_id)
  // console.log(req.params, "ok")
  const allSongs = await getAllSongs(playlist_id);
  res.json(allSongs);
});

// create
songs.post("/", async (req, res) => {
  const song = req.body;
  const newSong = await addSong(song);
  res.json(newSong);
});

// show - http://localhost:3003/playlists/:id/songs/:id
// should a validation be placed at each endpoint?
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  res.json(song);
});

// update - http://localhost:3003/playlists/:id/songs/:id
// why is there validation here but not on post or show?
// ???if not someone could leave the field blank causing a null value
songs.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { artist, song, album, release_date, is_favorite } = body;
  console.log(body);

  if (!artist || !song || !album || !release_date || !is_favorite) {
    res.status(422).json({
      error: true,
      success: false,
      message: "Invalid entry",
    });
  } else {
    const updatedSong = await updateSong(params.id, body);
    res.json(updatedSong);
  }
});

// songs.put("/:id", async (req, res) => {
//   const { body } = req;
//     const { id } = req.params;
//     const updatedSong = await updateSong(id, body);
//     console.log(updatedSong);
//     res.status(200).json(updatedSong);
//   });

// delete
songs.delete("/:id", async (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  res.json(deletedSong);
});

module.exports = songs;
