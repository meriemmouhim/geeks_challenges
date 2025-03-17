DROP TABLE IF EXISTS actors;
-- -- Create table
CREATE TABLE actors (
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(100),
    age DATE,
    number_oscars SMALLINT
);

-- -- Insert the data
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES
    ('Angelina', 'Jolie', '1975-06-04', 1),
    ('George', 'Clooney', '1961-06-05', 2),
    ('Jennifer', 'Aniston', '1969-02-11', 0),
    ('Matt', 'Damon', '1970-08-10', 5);

-- Count how many actors are in the table.
SELECT COUNT(*) AS Total_actors FROM actors;

-- Try to add a new actor with some blank fields. What do you think the outcome will be ?
INSERT INTO actors (first_name, last_name)
VALUES ('Tom', 'Hanks');

SELECT * FROM actors;
-- actor_id = auto = 5
-- first_name,last_name = the value that we insert
-- age,number.. = will be = NULL


