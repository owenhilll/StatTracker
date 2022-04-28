CREATE DATABASE BASEBALL_STATS

-- CREATE TABLE Teams (
--     state varchar(255) NOT NULL,
--     teamname varchar(255) NOT NULL,
--     wins int,
--     losses int,
--     teamid SERIAL PRIMARY KEY
-- );

CREATE TABLE stats (
    statename varchar(255) NOT NULL,
    teamname varchar(255) NOT NULL,
    wins int,
    losses int,
    teamid SERIAL PRIMARY KEY,
    hits int,
    homeruns int,
    strikeouts int
)
;

INSERT INTO stats(statename, teamname, wins, losses, teamid, hits, homeruns, strikeouts) 
VALUES('Georgia', 'Braves', 100, 62, 1, 1000, 100, 350)
;