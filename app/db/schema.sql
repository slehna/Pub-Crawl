CREATE DATABASE pubcrawl_db;
USE pubcrawl_db;


CREATE TABLE `pubcrawl_db`.`beer` (
  `idbeer` INT NOT NULL AUTO_INCREMENT,
  `abv` DECIMAL NOT NULL,
  `id` INT NOT NULL,
  `beer_name` VARCHAR(45) NOT NULL,
  `style` VARCHAR(45) NOT NULL,
  `brewery_id` VARCHAR(45) NOT NULL,
  `ounces` INT NOT NULL,
  PRIMARY KEY (`idbeer`));



CREATE TABLE `pubcrawl_db`.`breweries` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
