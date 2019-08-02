const JWT = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('X-Auth-Token');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = JWT.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
};

module.exports = verifyToken;