import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import userRoute from './routes/userRoute.js';
import mongoDBConnection from './config/db.js';
import errorHandler from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// express initialize
const app = express(); 

// environment setup
dotenv.config(); 
const PORT = process.env.SERVER_PORT;


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : false }))
app.use(cookieParser());
app.use(cors())

// routes
app.use('/api/users', userRoute);

/**
 * error handler middleware
 * we have to declar this after routes middleware
 */
app.use(errorHandler);


// server listen 
app.listen(PORT, () => {
    // mongodb intialize
    mongoDBConnection();
    console.log(`Express server is running on port ${PORT}`.bgGreen.black);
});