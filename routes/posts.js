const router = require('express').Router();
const postsController = require('../controllers/postsController');
const verify = require('./verifyToken');

// add verify to any route you want to make private and will require auth token.
router.get('/', verify, postsController.getPosts);

module.exports = router;