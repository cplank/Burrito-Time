CREATE DATABASE burrito_db;
USE burrito_db;

CREATE TABLE burritos
(
    id int
    AUTO_INCREMENT,
    burrito_name VARCHAR
    (40) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY
    (id)
);
