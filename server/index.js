const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const cors = require('cors')
const connectDB = require('./config/database')
const app = express()


const playlistRoutes = require('./routes/playlist');
const authRoutes = require('./routes/auth');

app.use(bodyParser.json()); // application/json

PORT = process.env.PORT || 5000

app.use(cors())

app.use(playlistRoutes);
app.use('/auth', authRoutes)

app.listen(PORT ,console.log(`Server running on port ${PORT}`))