-- all languages from the table language
ALTER TABLE customer_review DROP CONSTRAINT fk_fil_id;
DROP TABLE new_film;
SELECT name FROM language;
SELECT * FROM film;
SELECT language.name, title, description FROM film LEFT JOIN language ON film.language_id = language.language_id ;
SELECT language.name, title, description FROM film RIGHT JOIN language ON film.language_id = language.language_id ;
SELECT * FROM language LEFT JOIN film ON film.language_id = language.language_id ;
CREATE TABLE new_film(
	id SERIAL PRIMARY KEY,
	name VARCHAR(100)
);
INSERT INTO new_film (name)
VALUES ('Norbit'), ('Safe'), ('Unlocked');
SELECT * FROM new_film;
DROP TABLE new_film;
DROP TABLE IF EXISTS customer_review;
SELECT name FROM language;
SELECT * FROM film;
SELECT language.name, title, description FROM film LEFT JOIN language ON film.language_id = language.language_id ;
SELECT language.name, title, description FROM film RIGHT JOIN language ON film.language_id = language.language_id ;
SELECT * FROM language LEFT JOIN film ON film.language_id = language.language_id ;
CREATE TABLE new_film(
	id SERIAL PRIMARY KEY,
	name VARCHAR(100)
);
INSERT INTO new_film (name)
VALUES ('Norbit'), ('Safe'), ('Unlocked');
SELECT * FROM new_film;
CREATE TABLE customer_review(
	review_id SERIAL PRIMARY KEY NOT NULL,
	film_id INT NOT NULL,
	language_id INT NOT NULL,
	title VARCHAR(100) NOT NULL,
	score INT NOT NULL,
	review_text TEXT,
	last_update TIMESTAMP,
	CONSTRAINT fk_language_id FOREIGN KEY (language_id) REFERENCES language(language_id),
	CONSTRAINT fk_fil_id FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
	CONSTRAINT score_value CHECK (score >= 0 AND score <= 10)
);
SELECT * FROM new_film;
INSERT INTO customer_review(film_id, language_id, title, score, review_text)
VALUES (1, 1, 'offenced the whole word',9, 'one of the movies i really enjoyed and i rewatch it everyyear'),
(2, 1, 'very good movie',8, 'cant tell how much the movie made me excited') RETURNING * ;
SELECT * FROM new_film;
DELETE FROM new_film WHERE name = 'Safe' ;
SELECT * FROM new_film;
SELECT * FROM customer_review;
SELECT * FROM film INNER JOIN language ON language.language_id = film.language_id;

-- exercise 2
UPDATE film SET language_id = 3 WHERE film_id = 3;
SELECT * FROM film INNER JOIN language ON language.language_id = film.language_id;
SELECT * FROM customer;
DROP TABLE customer_review;
yes easy no extra checing
SELECT * FROM rental WHERE return_date IS null;
SELECT * FROM rental;
SELECT * FROM rental 
INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
LEFT JOIN film ON inventory.film_id = film.film_id
WHERE return_date IS NULL ORDER BY replacement_cost DESC LIMIT 30 ;
actor got actor_id and film got film_id while film_actor got both
SELECT * FROM film_actor 
INNER JOIN actor ON actor.actor_id = film_actor.actor_id
LEFT JOIN film ON film.film_id = film_actor.film_id
WHERE (first_name = 'Penelope' AND last_name = 'Monroe');
SELECT * FROM film 
WHERE (lengtH <= 100 AND rating = 'R');
SELECT * FROM film_category
INNER JOIN film ON film.film_id = film_category.film_id
LEFT JOIN category ON category.category_id = film_category.category_id
WHERE (category.category_id = 6 AND film.rating = 'R');
SELECT * FROM customer WHERE (first_name = 'Matthew' AND last_name = 'Mahan');
rental got last_update and the customer got the store_id and the film got the film_id while the inventory got them all
SELECT * FROM customer WHERE (first_name = 'Matthew' AND last_name = 'Mahan');
SELECT * FROM inventory
INNER JOIN film ON film.film_id = inventory.film_id
INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
INNER JOIN customer ON customer.store_id = inventory.store_id
WHERE customer.customer_id = 323 
AND film.rental_rate > 4
AND rental.return_date > '28/07/2005'
AND rental.return_date < '01/08/2005';

SELECT * FROM customer WHERE (first_name = 'Matthew' AND last_name = 'Mahan');
SELECT * FROM inventory
INNER JOIN film ON film.film_id = inventory.film_id
INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
INNER JOIN customer ON customer.store_id = inventory.store_id
WHERE customer.customer_id = 323 
AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%') --LIKE is case sensitive while the other is insensitive
ORDER BY film.replacement_cost DESC
