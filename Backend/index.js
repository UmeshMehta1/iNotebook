import express from 'express'
import connectDB from './db/db.js';
import router from './routes/auth.js';

const app = express()
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/"
connectDB(DATABASE_URL)

app.use(express.json())

app.use('/api/auth', router)

app.listen(3000, ()=>{
    console.log("server starting at 3000....")
})