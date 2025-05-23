const postModel = require('../models/postModel');

exports.createPost = (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.id;
  postModel.createPost(title, content, userId, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Post created' });
  });
};

exports.getAllPosts = (req, res) => {
  postModel.getAllPosts((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getPostById = (req, res) => {
  postModel.getPostById(req.params.id, (err, results) => {
    if (err || results.length === 0) return res.status(404).json({ error: 'Post not found' });
    res.json(results[0]);
  });
};

exports.updatePost = (req, res) => {
  const { title, content } = req.body;
  postModel.getPostById(req.params.id, (err, results) => {
    if (results[0].user_id !== req.user.id) return res.status(403).json({ error: 'Unauthorized' });
    postModel.updatePost(req.params.id, title, content, err => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Post updated' });
    });
  });
};

exports.deletePost = (req, res) => {
  postModel.getPostById(req.params.id, (err, results) => {
    if (results[0].user_id !== req.user.id) return res.status(403).json({ error: 'Unauthorized' });
    postModel.deletePost(req.params.id, err => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Post deleted' });
    });
  });
};
