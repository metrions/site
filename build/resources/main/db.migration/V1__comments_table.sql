CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    message VARCHAR(255),
    url_photo VARCHAR(1000)
);