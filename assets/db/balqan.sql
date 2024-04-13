DROP DATABASE IF EXISTS `balqan`;
CREATE DATABASE `balqan`;

USE `balqan`;

CREATE TABLE `users` (
    `user_id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_name` VARCHAR(255),
    `user_surname` VARCHAR(255),
    `password` VARCHAR(255),
    `email` VARCHAR(255),
    `img` VARCHAR(255),
    `DOF` DATE,
    `phone` VARCHAR(255),
    `country` VARCHAR(255),
    `jobTitle` VARCHAR(255),
    `YOE` INT,
    `gender` VARCHAR(15),
    `nationality` VARCHAR(255),
    `skills` JSON,
    `ratingsStar` JSON,
    `activities` JSON
    );

CREATE TABLE `items` (
    `item_id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255),
    `description` TEXT,
    `price` DECIMAL(10, 2),
    `stock_quantity` INT,
    `imgs_srcs` TEXT,
    `min_days` INT,
    `days` INT,
    `max_days` INT,
    `min_persons` VARCHAR(255),
    `persons` VARCHAR(255),
    `max_persons` VARCHAR(255),
    `category` VARCHAR(255),
    `title` VARCHAR(255),
    `intro` VARCHAR(255),
    `status` VARCHAR(255),
	`added_time` DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO items (imgs_srcs, name, intro, title, description, price, stock_quantity, days, min_persons, max_persons, category, status) 
VALUES (
"https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/package/en/package-14.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-10.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-9.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-2.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-3.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-4.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-5.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-6.jpg", 
"14 Day", 
"The 14-day tourist days program includes visits to the cities of Sarajevo and Bihać", 
"A tourist program in Bosnian", 
"One month of the tourism program for Bosnia: Accommodation in 4-star hotels with one month and two mobile SIM cards at reception, in addition to accommodation between cities and reception and farewell at airports. Its special monthly launch begins with a private driver to explore the most important tourist attractions of the current year. It is distinguished by its distinguished excellence with all the advantages provided to you The option can also be modified according to the customer's choice",  
"55", 
"100", 
"14", 
"1", 
"5", 
"package", 
"available"
), (
"https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/package/en/package-10.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-10.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-9.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-2.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-3.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-4.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-5.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-6.jpg", 
"10 Day", 
"The 10-day tourist days program includes visits to the cities of Sarajevo and Bihać", 
"A tourist program in Bosnian", 
"One month of the tourism program for Bosnia: Accommodation in 4-star hotels with one month and two mobile SIM cards at reception, in addition to accommodation between cities and reception and farewell at airports. Its special monthly launch begins with a private driver to explore the most important tourist attractions of the current year. It is distinguished by its distinguished excellence with all the advantages provided to you The option can also be modified according to the customer's choice",  
"55", 
"100", 
"10", 
"1", 
"5", 
"package", 
"available"
), (
"https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/package/en/package-7.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-10.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-9.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-2.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-3.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-4.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-5.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-6.jpg", 
"7 Day", 
"The 7-day tourist days program includes visits to the cities of Sarajevo and Bihać", 
"A tourist program in Bosnian", 
"One month of the tourism program for Bosnia: Accommodation in 4-star hotels with one month and two mobile SIM cards at reception, in addition to accommodation between cities and reception and farewell at airports. Its special monthly launch begins with a private driver to explore the most important tourist attractions of the current year. It is distinguished by its distinguished excellence with all the advantages provided to you The option can also be modified according to the customer's choice",  
"55", 
"100", 
"7", 
"1", 
"5", 
"package", 
"available"
), (
"https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/package/en/package-4.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-10.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-9.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-2.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-3.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-4.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-5.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-6.jpg", 
"4 Day", 
"The 4-day tourist days program includes visits to the cities of Sarajevo and Bihać", 
"A tourist program in Bosnian", 
"One month of the tourism program for Bosnia: Accommodation in 4-star hotels with one month and two mobile SIM cards at reception, in addition to accommodation between cities and reception and farewell at airports. Its special monthly launch begins with a private driver to explore the most important tourist attractions of the current year. It is distinguished by its distinguished excellence with all the advantages provided to you The option can also be modified according to the customer's choice",  
"55", 
"100", 
"4", 
"1", 
"5", 
"package", 
"available"
);
INSERT INTO items (imgs_srcs, name, intro, title, description, price, stock_quantity, min_days, max_days, persons, category, status) 
VALUES ( 
"https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/cars/car1.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-10.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-9.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-2.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-3.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-4.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-5.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-6.jpg", 
"Tesla", 
"The 14-day tourist days program includes visits to the cities of Sarajevo and Bihać", 
"A tourist program in Bosnian", 
"One month of the tourism program for Bosnia: Accommodation in 4-star hotels with one month and two mobile SIM cards at reception, in addition to accommodation between cities and reception and farewell at airports. Its special monthly launch begins with a private driver to explore the most important tourist attractions of the current year. It is distinguished by its distinguished excellence with all the advantages provided to you The option can also be modified according to the customer's choice",  
"55", 
"100", 
"14", 
"1", 
"5", 
"car", 
"available"
), (
"https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/cars/car.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-10.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-9.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-2.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-3.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-4.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-5.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-6.jpg", 
"BMW", 
"The 10-day tourist days program includes visits to the cities of Sarajevo and Bihać", 
"A tourist program in Bosnian", 
"One month of the tourism program for Bosnia: Accommodation in 4-star hotels with one month and two mobile SIM cards at reception, in addition to accommodation between cities and reception and farewell at airports. Its special monthly launch begins with a private driver to explore the most important tourist attractions of the current year. It is distinguished by its distinguished excellence with all the advantages provided to you The option can also be modified according to the customer's choice",  
"55", 
"100", 
"10", 
"1", 
"5", 
"car", 
"available"
), (
"https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/cars/car3.jpeg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-10.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-9.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-2.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-3.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-4.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-5.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-6.jpg", 
"Porsche", 
"The 7-day tourist days program includes visits to the cities of Sarajevo and Bihać", 
"A tourist program in Bosnian", 
"One month of the tourism program for Bosnia: Accommodation in 4-star hotels with one month and two mobile SIM cards at reception, in addition to accommodation between cities and reception and farewell at airports. Its special monthly launch begins with a private driver to explore the most important tourist attractions of the current year. It is distinguished by its distinguished excellence with all the advantages provided to you The option can also be modified according to the customer's choice",  
"55", 
"100", 
"7", 
"1", 
"5", 
"car", 
"available"
), (
"https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/cars/car4.avif https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-10.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-9.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-2.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-3.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-4.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-5.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-6.jpg", 
"Mercidies", 
"The 4-day tourist days program includes visits to the cities of Sarajevo and Bihać", 
"A tourist program in Bosnian", 
"One month of the tourism program for Bosnia: Accommodation in 4-star hotels with one month and two mobile SIM cards at reception, in addition to accommodation between cities and reception and farewell at airports. Its special monthly launch begins with a private driver to explore the most important tourist attractions of the current year. It is distinguished by its distinguished excellence with all the advantages provided to you The option can also be modified according to the customer's choice",  
"55", 
"100", 
"4", 
"1", 
"5", 
"car", 
"available"
);
INSERT INTO items (imgs_srcs, name, intro, title, description, price, stock_quantity, min_days, max_days, min_persons, max_persons, category, status) 
VALUES ( 
"https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/hotels/holiday.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-10.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-9.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-2.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-3.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-4.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-5.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-6.jpg", 
"Holiday Hotel", 
"The 14-day tourist days program includes visits to the cities of Sarajevo and Bihać", 
"A tourist program in Bosnian", 
"One month of the tourism program for Bosnia: Accommodation in 4-star hotels with one month and two mobile SIM cards at reception, in addition to accommodation between cities and reception and farewell at airports. Its special monthly launch begins with a private driver to explore the most important tourist attractions of the current year. It is distinguished by its distinguished excellence with all the advantages provided to you The option can also be modified according to the customer's choice",  
"55", 
"100", 
"14", 
"1", 
"5", 
"5", 
"hotel", 
"available"
), (
"https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/hotels/hotel2.png https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-10.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-9.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-2.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-3.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-4.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-5.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-6.jpg", 
"Hotel", 
"The 10-day tourist days program includes visits to the cities of Sarajevo and Bihać", 
"A tourist program in Bosnian", 
"One month of the tourism program for Bosnia: Accommodation in 4-star hotels with one month and two mobile SIM cards at reception, in addition to accommodation between cities and reception and farewell at airports. Its special monthly launch begins with a private driver to explore the most important tourist attractions of the current year. It is distinguished by its distinguished excellence with all the advantages provided to you The option can also be modified according to the customer's choice",  
"55", 
"100", 
"10", 
"1", 
"5", 
"5", 
"hotel", 
"available"
), (
"https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/hotels/hotel3.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-10.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-9.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-2.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-3.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-4.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-5.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-6.jpg", 
"Hotel", 
"The 7-day tourist days program includes visits to the cities of Sarajevo and Bihać", 
"A tourist program in Bosnian", 
"One month of the tourism program for Bosnia: Accommodation in 4-star hotels with one month and two mobile SIM cards at reception, in addition to accommodation between cities and reception and farewell at airports. Its special monthly launch begins with a private driver to explore the most important tourist attractions of the current year. It is distinguished by its distinguished excellence with all the advantages provided to you The option can also be modified according to the customer's choice",  
"55", 
"100", 
"7", 
"1", 
"5", 
"5", 
"hotel", 
"available"
), (
"https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/hotels/hotel4.jpeg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-10.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-9.webp https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-2.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-3.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-4.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-5.jpg https://raw.githubusercontent.com/IbrahimMoatazMohamed/IT-207-Introduction-to-Web-Programming/main/assets/images/tourist-places/tourist-places-6.jpg", 
"Hotel", 
"The 4-day tourist days program includes visits to the cities of Sarajevo and Bihać", 
"A tourist program in Bosnian", 
"One month of the tourism program for Bosnia: Accommodation in 4-star hotels with one month and two mobile SIM cards at reception, in addition to accommodation between cities and reception and farewell at airports. Its special monthly launch begins with a private driver to explore the most important tourist attractions of the current year. It is distinguished by its distinguished excellence with all the advantages provided to you The option can also be modified according to the customer's choice",  
"55", 
"100", 
"4", 
"1", 
"5", 
"5", 
"hotel", 
"available"
);

CREATE TABLE `carts` (
    `cart_id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT,
    `cart_items` TEXT,
	CONSTRAINT `fk_cart_user_id` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`)
);

CREATE TABLE `cart_items` (
    `cart_id` INT,
    `item_id` INT,
    `quantity` INT,
	CONSTRAINT `fk_cart_item_cart_id` FOREIGN KEY (`cart_id`) REFERENCES `carts`(`cart_id`),
	CONSTRAINT `fk_cart_item_item_id` FOREIGN KEY (`item_id`) REFERENCES `items`(`item_id`)
);

CREATE TABLE `articles` (
    `article_id` INT AUTO_INCREMENT PRIMARY KEY,
    `img` VARCHAR(300),
    `imgDesc` VARCHAR(255),
    `category` VARCHAR(255),
    `title` VARCHAR(255),
    `country` VARCHAR(255),
    `time` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `description` TEXT,
    `content` TEXT
);

CREATE TABLE `projects` (
    `project_id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255),
    `start_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `end_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `team` JSON,
    `tasks` JSON,
    `progressPersent` INT,
    `status` VARCHAR(255),
    `client` INT,
    `price` DECIMAL(10, 2),
    `progress` JSON,
    CONSTRAINT `fk_project_client` FOREIGN KEY (`client`) REFERENCES `users`(`user_id`)
);

CREATE TABLE `targets`(
	`target_id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT,
    `label` VARCHAR(255),
    `goal` DECIMAL(10, 2),
    `icon` VARCHAR(255),
    `achieved` DECIMAL(10, 2),
	CONSTRAINT `fk_targets_user_id` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`)
);

CREATE TABLE `tickets`(
	`ticket_id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT,
    `label` VARCHAR(255),
    `icon` VARCHAR(255),
    `achieved` DECIMAL(10, 2),
	CONSTRAINT `fk_tickets_user_id` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`)
);

CREATE TABLE `friends`(
	`user_id` INT,
    `friends` JSON,
	CONSTRAINT `fk_friends_user_id` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`)
);