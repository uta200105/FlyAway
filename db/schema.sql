CREATE DATABASE FlyAway_db;
USE FlyAway_db;

CREATE TABLE flights
(
	id int NOT NULL AUTO_INCREMENT,
  depart_place varchar(60) NOT NULL,
  arrive_place varchar(60) NOT NULL,
  depart_date DATE NOT NULL,
  depart_time TIME NOT NULL,
  arrival_date DATE NOT NULL,
  arrival_time TIME NOT NULL,
  depart_airport varchar (60) NOT NULL,
  arrival_airport varchar(60) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  seat_capacity int NOT NULL,
  seats_available int NOT NULL,
  flight_status varchar (60) NOT NULL,
  distance varchar (60) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE bookings
(
booking_number int NOT NULL AUTO_INCREMENT,
flight_id int(100) NOT NULL,
  first_name varchar(60) NOT NULL,
  middle_name varchar(60),
  last_name varchar(60) NOT NULL,
  date_of_birth varchar (60) NOT NULL,
  email varchar (100) NOT NULL,
  phone varchar (100),
	PRIMARY KEY (booking_number),
  	FOREIGN KEY ( booking_number) REFERENCES flights(id)
);



