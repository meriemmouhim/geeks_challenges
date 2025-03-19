-- -- exercise 1:
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

-- -- exercise 2:
SELECT * FROM customer;
SELECT CONCAT_WS(' ',first_name, last_name) AS full_name FROM customer;
SELECT DISTINCT create_date FROM customer;
SELECT * FROM customer ORDER BY first_name DESC;
SELECT * FROM film;
SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC;
SELECT * FROM customer INNER JOIN address ON customer.address_id = address.address_id;
SELECT * FROM customer INNER JOIN address ON customer.address_id = address.address_id WHERE (district = 'Texas');
SELECT * FROM film WHERE film_id = 15 OR film_id = 150;
SELECT film_id, title, description, length, rental_rate FROM film WHERE (title='Shrek License');
SELECT film_id, title, description, length, rental_rate FROM film WHERE title LIKE 'Sh%';
SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10;
SELECT * FROM film ORDER BY rental_rate ASC  FETCH FIRST 10 ROWS ONLY OFFSET 10;
SELECT	payment.customer_id, first_name, last_name, amount, payment_date FROM customer INNER JOIN payment ON payment.customer_id=customer.customer_id ORDER BY payment.customer_id;
SELECT * FROM film LEFT JOIN inventory ON film.film_id = inventory.film_id WHERE inventory_id IS NULL;	
SELECT * FROM city INNER JOIN country ON city.country_id = country.country_id;
SELECT * FROM payment INNER JOIN customer ON customer.customer_id = payment.customer_id;
