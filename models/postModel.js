const db = require('../config/db');

exports.createPost = (title, content, userId, callback) => {
  db.query('INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)', [title, content, userId], callback);
};

exports.getAllPosts = callback => {
  db.query('SELECT posts.*, users.username FROM posts JOIN users ON posts.user_id = users.id', callback);
};

exports.getPostById = (id, callback) => {
  db.query('SELECT * FROM posts WHERE id = ?', [id], callback);
};

exports.updatePost = (id, title, content, callback) => {
  db.query('UPDATE posts SET title = ?, content = ? WHERE id = ?', [title, content, id], callback);
};

exports.deletePost = (id, callback) => {
  db.query('DELETE FROM posts WHERE id = ?', [id], callback);
};
