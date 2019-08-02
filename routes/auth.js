const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { registerValidation } = require('../validation');



router.post('/register', async (req, res) => {
  // validate data before we make a user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(`Error: ${error.details[0].message}`);

  // check if email already exists in db
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send('Message: Email already exists, please use a different email.');

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(req.body.password, salt);

  // create user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPass,
  });

  // save user to db
  try {
    const savedUser = await  user.save();
    res.send({ user: user.id });
  } catch (error) {
    res.status(400).send(error)
  }
});

router.post('/login', (req, res) => {
  res.send('Login');
});

module.exports = router;