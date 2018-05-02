-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS Zombie_db;
-- Creates the "blogger" database --
CREATE DATABASE Zombie_db;


CREATE TABLE survivor_db (
	SurvivorId INTEGER(11) NOT NULL AUTO_INCREMENT,
	FirstName VARCHAR(25) NOT NULL,	
    LastName VARCHAR(25) NOT NULL,
    PRIMARY KEY (SurvivorId)
);
            
CREATE TABLE Item_db (
	ItemId INTEGER(11) NOT NULL AUTO_INCREMENT,
	ItemName VARCHAR(25) NOT NULL,
	Category VARCHAR(25) NOT NULL,
	Units VARCHAR (25) NOT NULL,
	ExpirationDate DATE NOT NULL,
    SurvivorId INTEGER(11) NOT NULL,
    PRIMARY KEY (ItemId)
);