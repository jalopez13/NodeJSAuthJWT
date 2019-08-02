const router = require('express').Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await  user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error)
  }
});

router.post('/login', (req, res) => {
  res.send('Login');
});

module.exports = router;