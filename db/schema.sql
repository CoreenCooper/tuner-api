DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;
\c songs_dev;

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name TEXT,
    genre TEXT,
    label TEXT
);

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
    year INT,
    title TEXT NOT NUll,
    artist_id INT REFERENCES artists(id) ON DELETE CASCADE
);

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    artist TEXT NOT NULL,
    song TEXT NOT NULL,
    album TEXT NOT NULL,
    time INT NOT NULL,
    is_favorite BOOLEAN NOT NULL DEFAULT FALSE,
    artist_id INT REFERENCES artists(id) ON DELETE CASCADE,
    album_id INT REFERENCES albums(id) ON DELETE CASCADE
);

-- CREATE TABLE playlist (
--     id SERIAL PRIMARY KEY,
--     name TEXT,
-- );