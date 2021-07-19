const express = require("express");
// const playlistsController = require("./playlistsController");
const songs = express.Router({mergeParams:true});
const {
  getAllSongs,
  getSong,
  addSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

// songs.use("/:song_id/playlists", playlistsController);

//index
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.json({ sucess: true, payload: allSongs });
  // res.json(allSongs);
});

//create
songs.post("/", async (req, res) => {
  // const newSong = req.body;
  // // console.log(newSong);
  // const result = await addSong(newSong);
  // res.json(result);
  try {
    const song = req.body;
    const newSong = await addSong(song);
    res.json(newSong);
  } catch (error) {
    return error;
  }
});

//show
// should a validation be placed at each endpoint?
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  res.json({ success: true, payload: song });
  // try {
  //   const song = await getSong(id);
  //   if (song.id) {
  //     res.json(song);
  //   } else {
  //     res.redirect("/*");
  //   }
  // } catch (error) {
  //   return error;
  // }
});

//update
// why is there validation here but not on post or show?
songs.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { artist, song, album, release_date, is_favorite } = body;

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

//delete
songs.delete("/:id", async (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;

  const deletedSong = await deleteSong(id);
  res.json({ song_deleted: true, payload: deletedSong })
  // res.status(200).json(deletedSong);
});

module.exports = songs;
