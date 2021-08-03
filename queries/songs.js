const db = require("../db/dbConfig");

// index
const getAllSongs = async (playlist_id) => {
  try {
    console.log(playlist_id);
    const allSongs = await db.any(
      "SELECT * FROM songs WHERE playlist_id=$1",
      playlist_id
    );
    return { success: true, payload: allSongs };
  } catch (error) {
    return { success: false, payload: error };
  }
};

// create
const addSong = async (newSong) => {
  // console.log(newSong.artist)
  const { playlist_id, artist, song, album, release_date, is_favorite } =
    newSong;
  try {
    const newSong = await db.one(
      "INSERT INTO songs ( playlist_id, artist, song, album, release_date, is_favorite ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [playlist_id, artist, song, album, release_date, is_favorite]
    );
    return { success: true, payload: newSong };
  } catch (error) {
    return { success: false, payload: error };
  }
};

// show
const getSong = async (id) => {
  try {
    const song = await db.any("SELECT * FROM songs WHERE id=$1", id);
    return { success: true, payload: song };
  } catch (error) {
    return { success: false, payload: error };
  }
};

// update
const updateSong = async (id, body) => {
  const { artist, song, album, release_date, is_favorite } = body;
  try {
    const updatedSong = await db.one(
      "UPDATE songs SET artist=$1, song=$2, album=$3, release_date=$4, is_favorite=$5 WHERE id=$6 RETURNING *",
      [artist, song, album, release_date, is_favorite, id]
    );
    return { success: true, payload: updatedSong };
  } catch (error) {
    return { success: false, payload: error };
  }
};

// delete
const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id = $1 RETURNING *",
      id
    );
    return { success: true, payload: deletedSong };
  } catch (error) {
    return { success: false, payload: error };
  }
};

module.exports = { getAllSongs, getSong, addSong, deleteSong, updateSong };
