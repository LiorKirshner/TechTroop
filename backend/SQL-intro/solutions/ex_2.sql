USE sql_intro;

-- Find all dolphins with a name that has the letters "on" anywhere in the name
SELECT * FROM Dolphin WHERE name LIKE '%on%';
