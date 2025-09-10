USE sql_intro;

-- Retrieve only the name and height for all the healthy dolphins sorted by their height (tallest to shortest)
SELECT name, height FROM Dolphin WHERE healthy = 1 ORDER BY height DESC;
