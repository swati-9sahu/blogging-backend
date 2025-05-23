const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
require('dotenv').config();

exports.signup = (req, res) => {
  const { username, email, password } = req.body;
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ error: err });
    userModel.createUser(username, email, hashedPassword, (err, result) => {
      if (err) return res.status(400).json({ error: 'Email already exists' });
      res.status(201).json({ message: 'User created' });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  userModel.getUserByEmail(email, (err, result) => {
    if (err || result.length === 0) return res.status(400).json({ error: 'Invalid credentials' });

    const user = result[0];
    bcrypt.compare(password, user.password, (err, match) => {
      if (!match) return res.status(400).json({ error: 'Invalid credentials' });

      const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
      res.json({ token });
    });
  });
};
