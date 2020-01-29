CREATE DATABASE burgers_db;
use burgers_db;

CREATE TABLE burgers(
    id AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN,
    )