CREATE DATABASE FlyAway_db;
USE FlyAway_db;

CREATE TABLE flights
(
	id int NOT NULL AUTO_INCREMENT,
  depart_place varchar(60) NOT NULL,
  arrive_place varchar(60) NOT NULL,
  depart_datetime DATETIME(6) NOT NULL,
  arrival_datetime DATETIME(6) NOT NULL,
  depart_airport varchar (60) NOT NULL,
  arrival_airport varchar(60) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  seat_capacity int NOT NULL,
  seats_available int NOT NULL,
  flight_availability BOOLEAN DEFAULT true,
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
  credit_card_type varchar (60) NOT NULL,
  credit_card_number varchar (16) NOT NULL,
  first_name_cc varchar(60) NOT NULL,
  last_name_cc varchar(60) NOT NULL,
  expiration_date int(10) NOT NULL,
  cvc_cc varchar(3) NOT NULL,
  country varchar (60) NOT NULL,
  street_address varchar (100) NOT NULL,
  city varchar(100) NOT NULL,
  state_address varchar (60) NOT NULL,
  zip_code int (20) NOT NULL,
	PRIMARY KEY (booking_number),
  	FOREIGN KEY ( booking_number) REFERENCES flights(id)
);



