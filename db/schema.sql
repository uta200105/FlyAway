DROP DATABASE IF EXISTS flight_db;
CREATE DATABASE flight_db;
USE flight_db;

CREATE TABLE flights
(
	id int NOT NULL AUTO_INCREMENT,
    airport_depart VARCHAR(255) NOT NULL,
    airport_arrival VARCHAR(255) NOT NULL,
    gate_depart INT(10) NOT NULL,
    gate_arrival INT(10) NOT NULL,
    terminal_depart VARCHAR(6) NOT NULL,
    terminal_arrival VARCHAR(6) NOT NULL,
    date_depart DATE NOT NULL,
    date_arrival DATE NOT NULL,
	time_depart TIME NOT NULL,
	time_arrival TIME NOT NULL,
    city_depart VARCHAR(255) NOT NULL,
    city_arrival VARCHAR(255) NOT NULL,
    flight_length TIME NOT NULL,
    flight_id INT(10) NOT NULL,
	PRIMARY KEY (id),
);