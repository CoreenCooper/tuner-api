DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;
\c songs_dev;

CREATE TABLE playlists (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    artist TEXT NOT NULL,
    song TEXT NOT NULL,
    album TEXT NOT NULL,
    release_date INT NOT NULL,
    is_favorite BOOLEAN NOT NULL DEFAULT FALSE,
    playlist_id INT REFERENCES playlists(id) ON DELETE CASCADE
);

-- CREATE TABLE artists (
--     id SERIAL PRIMARY KEY,
--     name TEXT,
--     genre TEXT,
--     label TEXT
-- );

-- CREATE TABLE albums (
--     id SERIAL PRIMARY KEY,
--     year INT,
--     title TEXT NOT NUll,
--     artist_id INT REFERENCES artists(id) ON DELETE CASCADE
-- );