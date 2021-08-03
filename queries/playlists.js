const db = require("../db/dbConfig");

// index
const getAllPlaylists = async () => {
  try {
    const getAllPlaylists = await db.any("SELECT * FROM playlists");
    return { success: true, payload: getAllPlaylists };
  } catch (error) {
    return { success: false, payload: error };
  }
};

// create
const addPlaylist = async (newPlaylist) => {
  const { name } = newPlaylist;
  try {
    const newPlaylist = await db.one(
      "INSERT INTO playlists (name) VALUES ($1) RETURNING *",
      name
    );
    return { success: true, payload: newPlaylist };
  } catch (error) {
    return { success: false, payload: error };
  }
};

// show
const getPlaylist = async (id) => {
  try {
    const playlist = await db.one("SELECT * FROM playlists WHERE id=$1", id);
    return { success: true, payload: playlist };
  } catch (error) {
    return { success: false, payload: error };
  }
};

// update - put
// not working
const updatePlaylist = async (id, body) => {
  const { name } = body;
  try {
    const updatedPlaylist = await db.one(
      `UPDATE playlists SET name=$1 WHERE id=$2 RETURNING *`,
      [name, id]
    );
    return { success: true, payload: updatedPlaylist };
  } catch (error) {
    return { success: false, payload: error };
  }
};

// delete
const deletePlaylist = async (id) => {
  try {
    const deletedPlaylist = await db.one(
      "DELETE FROM playlists WHERE id=$1 RETURNING *",
      id
    );
    return { success: true, payload: deletedPlaylist };
  } catch (error) {
    return { success: false, payload: error };
  }
};

module.exports = {
  getAllPlaylists,
  getPlaylist,
  addPlaylist,
  updatePlaylist,
  deletePlaylist,
};
