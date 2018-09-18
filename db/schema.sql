DROP DATABASE IF EXISTS flight_db;
CREATE DATABASE flight_db;
USE flight_db;

CREATE TABLE bookings
(
	id INT NOT NULL AUTO_INCREMENT,
	customer_name VARCHAR(255) NOT NULL,
    flight_id INT(10) NOT NULL,
    cost INT(10) NOT NULL,
    city_depart VARCHAR(255) NOT NULL,
    city_arrival VARCHAR(255) NOT NULL,
    airport_depart VARCHAR(255) NOT NULL,
    airport_arrival VARCHAR(255) NOT NULL,
    gate_depart INT NOT NULL,
    gate_arrival INT NOT NULL,
    terminal_depart VARCHAR(6) NOT NULL,
    terminal_arrival VARCHAR(6) NOT NULL,
    time_depart TIME NOT NULL,
    time_arrival TIME NOT NULL,
    layover VARCHAR(255) NOT NULL,
    flight_length INT(10) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE flights
(
	id int NOT NULL AUTO_INCREMENT,
    airport_depart VARCHAR(255) NOT NULL,
    airport_arrival VARCHAR(255) NOT NULL,
    gate_depart INT(10) NOT NULL,
    gate_arrival INT(10) NOT NULL,
    terminal_depart VARCHAR(6) NOT NULL,
    terminal_arrival VARCHAR(6) NOT NULL,
	time_depart TIME NOT NULL,
	time_arrival TIME NOT NULL,
    city_depart VARCHAR(255) NOT NULL,
    city_arrival VARCHAR(255) NOT NULL,
    layover VARCHAR(255) NOT NULL,
    flight_length INT(10) NOT NULL,
    flight_id INT(10) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (flight_id) REFERENCES flight(id)
);