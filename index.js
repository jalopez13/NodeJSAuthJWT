const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const PORT = 5000;
const app = express();
const authRoute = require('./routes/auth');

// middleware
app.use(bodyParser.json());
app.use(cors());

// routes
app.use('/api/user', authRoute);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));