
DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products
(
    id INT AUTO_INCREMENT NOT NULL,
    product VARCHAR(45) NOT NULL,
    department VARCHAR(45) NULL,
    price DECIMAL(10,2) NULL,
    quantity INTEGER(10) NULL,
    over_head DECIMAL(10,2) NULL,
    sales DECIMAL(10,2) NULL,

    PRIMARY KEY(id)
);