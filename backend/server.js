// const express = require('express') ---- common JS, ES module:
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js' // .js file extension important when importing files
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

// mount productRoutes
app.use('/api/products', productRoutes) // for anything that goes to /api/products use productRoutes

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
)
