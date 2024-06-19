const express = require('express')
require('dotenv').config()
const cors = require('cors')
const connectDB = require('./config/database')
const app = express()


PORT = process.env.PORT || 5000

app.use(cors())


app.listen(PORT ,console.log(`Server running on port ${PORT}`))