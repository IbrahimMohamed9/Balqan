USE `balqan`;

SELECT u.*, COUNT(up.user_id) AS projects, COALESCE(AVG(up.price), 0) AS `earned`, MAX(DATE(ph.change_date)) as `last_change`
FROM users AS u
         LEFT JOIN user_projects up ON u.user_id = up.user_id AND up.position != 'customer'
         LEFT JOIN password_history ph ON u.user_id = ph.user_id
WHERE u.user_id = :user_id
GROUP BY u.user_id;

SELECT * FROM widgets;