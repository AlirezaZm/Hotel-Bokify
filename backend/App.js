const express = require('express')
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB()

const app = express()
const cors = require('cors')

app.get('/', (req, res, next) => res.send('API is working'))
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    next();
})
app.use(express.json({ extended: false }))

app.use('/api/auth' , require('./route/api/auth'))

app.listen(PORT, () => console.log(`connected on port ${PORT}`))