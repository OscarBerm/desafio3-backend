--get all posts
SELECT * FROM posts ORDER BY id DESC;

--add post
INSERT INTO posts (titulo, img, descripcion, likes) VALUES ('titulo', 'img', 'descripcion', 0);

--update likes from post
UPDATE posts SET likes = likes + 1 WHERE id = 1;

--delete post
DELETE FROM posts WHERE id = 1;