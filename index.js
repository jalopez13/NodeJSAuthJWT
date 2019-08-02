const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const PORT = 5000;
const app = express();
const authRoute = require('./routes/auth');

// DB Connect
mongoose.connect('mongodb://localhost:27017/nodejsauthjwt', { useNewUrlParser: true });

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

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));