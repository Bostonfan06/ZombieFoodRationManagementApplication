-- Some Dummy Data to fill out database
USE Zombie_db;

INSERT INTO Survivors (SurvivorId, Firstname, Lastname, createdAt, updatedAt) VALUES (0, 'Rick', 'Grimes', '2018-05-05 15:45:31', '2018-05-05 15:45:31');
INSERT INTO Survivors (SurvivorId, Firstname, Lastname, createdAt, updatedAt) VALUES (1, 'Carl', 'Grimes', '2018-05-05 15:45:31', '2018-05-05 15:45:31');
INSERT INTO Survivors (SurvivorId, Firstname, Lastname, createdAt, updatedAt) VALUES (2, 'Glenn', 'Rhee', '2018-05-05 15:45:31', '2018-05-05 15:45:31');
            
INSERT INTO Items (ItemId, ItemName, Category, Units, ExpirationDate, SurvivorId, createdAt, updatedAt) VALUES (0, 'Canned Tuna', 'Proteins', 12, '2020-01-29', 1, '2018-05-05 15:45:31', '2018-05-05 15:45:31');
INSERT INTO Items (ItemId, ItemName, Category, Units, ExpirationDate, SurvivorId, createdAt, updatedAt) VALUES (1, 'Raisin Bran', 'Grains', 2, '2019-06-18', 1, '2018-05-05 15:45:31', '2018-05-05 15:45:31');
INSERT INTO Items (ItemId, ItemName, Category, Units, ExpirationDate, SurvivorId, createdAt, updatedAt) VALUES (2, 'Twinkie', 'Misc', 4, '2070-12-25', 2, '2018-05-05 15:45:31', '2018-05-05 15:45:31');