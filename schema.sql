-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS Zombie_db;
-- Creates the "blogger" database --
CREATE DATABASE Zombie_db;


CREATE TABLE survivor_tb (
			SurvivorID int PRIMARY KEY,
			Firstname VARCHAR(25) NOT NULL,	
            Lastname VARCHAR(25)	NOT NULL
);
            
CREATE TABLE Item_db (
		ItemID int PRIMARY KEY,
		ItemName VARCHAR(25) NOT NULL,
		Category	VARCHAR(25) NOT NULL,
		Units VARCHAR (25) NOT NULL,
		ExpirationDate int
);