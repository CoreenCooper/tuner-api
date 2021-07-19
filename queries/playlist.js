const db = require("../db/dbConfig");

// write a function that list all the playlist
// index
const allPlaylists = (async) => {
  try {
    const allPlaylists = await db.any("SELECT * FROM playlists");
    return allPlaylists;
  } catch (error) {
    return error;
  }
};
