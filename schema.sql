DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products
(
    id AUTO_INCREMENT NOT NULL,
    product VARCHAR(45) NOT NULL,
    department VARCHAR(45) NULL,
    price DECIMAL(10,2) NULL,
    quantity INTEGER(10) NULL,
    PRIMARY KEY(item_id)
);




