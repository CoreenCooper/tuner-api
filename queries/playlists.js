// const playlists = require("../controllers/playlistsController");
const db = require("../db/dbConfig");

// write a function that list all the playlist
// index
const getAllPlaylists = async () => {
  try {
    const getAllPlaylists = await db.any("SELECT * FROM playlists");
    // console.log(getAllPlaylists);
    return getAllPlaylists;
  } catch (error) {
    return error;
  }
};

// show
const getPlaylist = async (id) => {
  try {
    const playlist = await db.one("SELECT * FROM playlists WHERE id=$1", id);
    // const playlist = await db.one("SELECT song, artist FROM songs WHERE playlist_id=$1", id);
    return playlist;
  } catch (error) {
    return error;
  }
};

// // details
// const getPlaylist = async (id) => {
//   try {
//     const playlist = await db.one("SELECT * FROM songs WHERE playlist_id=$1", id);
//     // const playlist = await db.one("SELECT song, artist FROM songs WHERE playlist_id=$1", id);
//     return playlist;
//   } catch (error) {
//     return error;
//   }
// };

module.exports = { getAllPlaylists, getPlaylist };
