CREATE DATABASE burgers_db;
use burgerS_db;

CREATE TABLE burgers(
    id INTEGER AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL
    PRIMARY KEY(id)
)