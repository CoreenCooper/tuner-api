const db = require("../db/dbConfig");

//index
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
};

//create
const addSong = async (newSong) => {
  // console.log(newSong.artist)
  const { playlist_id, artist, song, album, release_date, is_favorite } = newSong;
  try {
    const newSong = await db.one(
      "INSERT INTO songs ( playlist_id, artist, song, album, release_date, is_favorite ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [playlist_id, artist, song, album, release_date, is_favorite]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};

//show
const getSong = async (id) => {
  try {
    const song = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return song;
  } catch (error) {
    return error;
  }
};

//update
const updateSong = async (id, body) => {
  const { playlist_id, artist, song, album, release_date, is_favorite } = body;
    try {
      const updatedSong = await db.one(
        "UPDATE songs SET playlist_id=$1, artist=$2, song=$3, album=$4, release_date=$5, is_favorite=$6 where id=$7 RETURNING *",
        [ playlist_id, artist, song, album, release_date, is_favorite, id]
      );
      return updatedSong;
    } catch (error) {
      return error;
    }
  };

//delete
const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one("DELETE FROM songs WHERE id = $1 RETURNING *", id);
    return deletedSong;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSongs, getSong, addSong, deleteSong, updateSong };
