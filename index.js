const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const PORT = 5000;
const app = express();
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

// DB Connect
mongoose.connect(`mongodb://test:test1234@ds113835.mlab.com:13835/nodejsauthjwt`, { useNewUrlParser: true });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB connected and ready to rock...')
});

// middleware
app.use(bodyParser.json());
app.use(cors());

// routes
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));