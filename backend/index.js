import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import AuthRoutes from './Routes/Auth.js'
import UserRoutes from './Routes/User.js'

const app = express();
const port = 8080

dotenv.config()

app.use(cors(
    {origin: true, credentials: true}
))

mongoose.set('strictQuery',true)
const connect = ()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to Database")
    }).catch((err)=>{
        throw err
    })
}
const router = express.Router()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/auth', AuthRoutes)
app.use('/api/user', UserRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use((err,req,res,next)=>{
    const status = err.status || 500
    const message = err.message || "Unknown Error Occured"
    return res.status(status).json({
        success: false,
        status,
        message
    })
})

app.listen(port, () => {
    connect()
    console.log(`Server is running on port ${port}`);
});