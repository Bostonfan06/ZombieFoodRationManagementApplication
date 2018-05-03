-- -- Drops the Zombie if it exists currently --
-- DROP DATABASE IF EXISTS Zombie_db;
-- -- Creates the "Zombie" database --
-- CREATE DATABASE Zombie_db;


-- USE Zombie_db;
-- -- Create Survivor Table
-- CREATE TABLE Survivors (
-- 	SurvivorId INTEGER(11) NOT NULL AUTO_INCREMENT,
-- 	FirstName VARCHAR(25) NOT NULL,	
--     LastName VARCHAR(25) NOT NULL,
--     PRIMARY KEY (SurvivorId)
-- );

-- -- Create Items Table
-- CREATE TABLE Items (
-- 	ItemId INTEGER(11) NOT NULL AUTO_INCREMENT,
-- 	ItemName VARCHAR(25) NOT NULL,
-- 	Category VARCHAR(25) NOT NULL,
-- 	Units VARCHAR (25) NOT NULL,
-- 	ExpirationDate DATE NOT NULL,
--     SurvivorId INTEGER(11) NOT NULL,
--     PRIMARY KEY (ItemId)
-- );