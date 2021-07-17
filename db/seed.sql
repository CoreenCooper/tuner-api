\c songs_dev;

INSERT INTO artists (name, genre, label)
    VALUES
        ('Jodeci', 'R&B', 'RCA Records'),
        ('Bodak Yellow', 'Rap', 'Atlantic Records'),
        ('Stop Being Greedy', 'Rap', 'Ruff Ryders Entertainment'),
        ('God''s Plan', 'Rap', 'Cash Money Records'),
        ('On Everything', 'Rap', 'Epic Records'),
        ('Ay Bendito', 'Bachata', 'Eternity Records'),
        ('If', 'Reggae', 'RCA Records'),
        ('Pero Ya No', 'Latin trap', 'Rimas Music');

INSERT INTO albums (artist_id, year, title)
    VALUES
        ('1', 1991, 'Forever My Lady'),
        ('2', 2018, 'Invasion of Privacy'),
        ('3', 1998, 'It''s Dark and Hell Is Hot'),
        ('4', 2018, 'Scorpion'),
        ('5', 2017, 'Grateful'),
        ('6', 2017, 'Golden'),
        ('7', 2020, 'A Good Time'),
        ('8', 2019, 'YHLQMDLG');

INSERT INTO songs (artist_id, album_id, artist, song, album, time, is_favorite)
    VALUES
        ('1', '1', 'Jodeci', 'Stay', 'Forever My Lady', 1991, false),
        ('2', '2', 'Cardi B', 'Bodak Yellow', 'Invasion of Privacy', 2018, true),
        ('3', '3', 'DMX', 'Stop Being Greedy', 'It''s Dark and Hell Is Hot', 1998, false),
        ('4', '4', 'Drake', 'God''s Plan', 'Scorpion', 2018, true),
        ('5', '5', 'DJ Khalid', 'On Everything', 'Grateful', 2017, false),
        ('6', '6', 'Anthony Santos', 'Ay Bendito', 'Golden', 2017, false),
        ('7', '7', 'Davido', 'If', 'A Good Time', 2020, true),
        ('8', '8', 'Bad Bunny', 'Pero Ya No', 'YHLQMDLG', 2020, false);
        