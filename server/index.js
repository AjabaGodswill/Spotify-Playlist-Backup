const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const cors = require('cors')
const connectDB = require('./config/database')
const app = express()
const session = require('express-session');



const playlistRoutes = require('./routes/playlist');
const authRoutes = require('./routes/auth');

app.use(bodyParser.json()); // application/json

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
  }));

PORT = process.env.PORT || 5000

app.use(cors())

app.use(playlistRoutes);
app.use('/auth', authRoutes)

app.listen(PORT ,console.log(`Server running on port ${PORT}`))