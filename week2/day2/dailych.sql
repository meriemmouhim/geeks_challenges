DROP TABLE IF EXISTS FirstTab;
DROP TABLE IF EXISTS SecondTab;
CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
);
INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar');

-- output: fisrtTab table
SELECT * FROM FirstTab;

CREATE TABLE SecondTab (
    id integer 
);
INSERT INTO SecondTab VALUES
(5),
(NULL);
-- output: SecondTab table
SELECT * FROM SecondTab;

-- output: count -> 0
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );


-- output: count -> 2
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );

-- output: count -> 0
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab );

-- output: count -> 2
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );





	