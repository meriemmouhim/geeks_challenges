-- -- create items table
CREATE TABLE items(
    item_id SERIAL PRIMARY KEY,
    item TEXT,
    price INT
);
-- -- create customers table
CREATE TABLE  customers(
	customer_id SERIAL PRIMARY KEY,
	first_name TEXT,
	last_name TEXT
);
-- -- insert data
INSERT INTO items(item,price)
VALUES ('Small Desk',100),
	   ('Large desk',300),
	   ('Fan',80);
-- -- insert data
INSERT INTO customers(first_name,last_name)
VALUES ('Greg','Jones'),
       ('Sandra','Jones'),
	   ('Scott','Scott'),
	   ('Trevor','Green'),
	   ('Melanie','Johnson');
-- select all
SELECT * FROM items;
SELECT * FROM customers;
-- All the items with a price above 80 (80 not included).
SELECT * FROM items
WHERE price > 80;

-- All the items with a price below 300. (300 included)
SELECT * FROM items
WHERE price <= 300;
-- All customers whose last name is ‘Smith’ (What will be your outcome?).
SELECT * FROM customers
WHERE last_name = 'Smith' ;
-- no one have this last name!!!
-- All customers whose last name is ‘Jones’
SELECT * FROM customers
WHERE last_name = 'Jones';
-- All customers whose firstname is not ‘Scott’.
SELECT * FROM customers
WHERE NOT first_name = 'Scott' 

-- -- create items table
CREATE TABLE items(
    item_id SERIAL PRIMARY KEY,
    item TEXT,
    price INT
);
-- -- create customers table
CREATE TABLE  customers(
	customer_id SERIAL PRIMARY KEY,
	first_name TEXT,
	last_name TEXT
);
-- -- insert data
INSERT INTO items(item,price)
VALUES ('Small Desk',100),
	   ('Large desk',300),
	   ('Fan',80);
-- -- insert data
INSERT INTO customers(first_name,last_name)
VALUES ('Greg','Jones'),
       ('Sandra','Jones'),
	   ('Scott','Scott'),
	   ('Trevor','Green'),
	   ('Melanie','Johnson');
-- select all
SELECT * FROM items;
SELECT * FROM customers;
-- All the items with a price above 80 (80 not included).
SELECT * FROM items
WHERE price > 80;

-- All the items with a price below 300. (300 included)
SELECT * FROM items
WHERE price <= 300;
-- All customers whose last name is ‘Smith’ (What will be your outcome?).
SELECT * FROM customers
WHERE last_name = 'Smith' ;
-- no one have this last name!!!
-- All customers whose last name is ‘Jones’
SELECT * FROM customers
WHERE last_name = 'Jones';
-- All customers whose firstname is not ‘Scott’.
SELECT * FROM customers
WHERE NOT first_name = 'Scott'
-- All items grouped by price in ascending order
SELECT * FROM items ORDER BY price ASC;
-- All items grouped by price in descending order
SELECT * FROM items ORDER BY price DESC;
-- All items grouped by prices above or equal to 100 in descending order
SELECT * FROM items WHERE (price >= 100) ORDER BY price DESC;
-- All custemrs grouped by first letter in ascending order
SELECT * FROM customers;
SELECT first_name, last_name FROM customers ORDER BY first_name ASC LIMIT 3;
-- All custemrs grouped by first letter in descending order
SELECT last_name FROM customers ORDER BY last_name DESC