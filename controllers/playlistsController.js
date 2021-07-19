const express = require("express");
const songsController = require("./songsController")
const playlists = express.Router();
const {
    getAllPlaylists,
    getPlaylist
} = require("../queries/playlists");

// routes playlist(id).get
playlists.use("/:playlists_id/songs", songsController);


// index
playlists.get("/", async (req, res) => {
    const allPlaylists = await getAllPlaylists();
    res.json({ sucess: true, payload: allPlaylists });
});

// show
playlists.get("/:id", async (req, res) => {
    const { id } = req.params;
    const playlist = await getPlaylist(id);
    console.log(playlist)
    res.json({ success: true, payload: playlist.name});
});

module.exports = playlists;
