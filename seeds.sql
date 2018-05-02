-- Some Dummy Data to fill out database
USE Zombie_db;

INSERT INTO Survivors (Firstname, Lastname) VALUES ('Rick', 'Grimes');
INSERT INTO Survivors (Firstname, Lastname) VALUES ('Carl', 'Grimes');
INSERT INTO Survivors (Firstname, Lastname) VALUES ('Glenn', 'Rhee');
            
INSERT INTO Items (ItemName, Category, Units, ExpirationDate, SurvivorId) VALUES ('Canned Tuna', 'Proteins', 12, '2020-01-29', 1);
INSERT INTO Items (ItemName, Category, Units, ExpirationDate, SurvivorId) VALUES ('Raisin Bran', 'Grains', 2, '2019-06-18', 1);
INSERT INTO Items (ItemName, Category, Units, ExpirationDate, SurvivorId) VALUES ('Twinkie', 'Misc', 4, '2070-12-25', 2);