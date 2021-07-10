const express = require("express");
const songs = express.Router();
const { getAllSongs } = require("../queries/songs");

//index
songs.get("/", async (req, res) => {
    // res.json({ status: "ok" });
    const allSongs = await getAllSongs();
    res.json(allSongs);
});

module.exports = songs;