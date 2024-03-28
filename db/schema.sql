DROP DATABASE IF EXISTS yujojo_db;

CREATE DATABASE yujojo_db;

USE DATABASE yujojo_db;

CREATE TABLE user (
  username VARCHAR(15) NOT NULL,
  password VARCHAR(15) NOT NULL,
  PRIMARY KEY (username)
);

CREATE TABLE post (
  title  VARCHAR(50),
  text VARCHAR(500),
  image BLOB,
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
  
);
