import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoute from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {console.log('mongodb is connected')})
    .catch ( err => {console.log(err)});
const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.listen(3000, () => {

    console.log('server runningasdf inasdf111port 3000asdaf!');

});



app.use('/api/user',userRoutes);
app.use('/api/auth',authRoute);

app.use(express.static(path.join(__dirname,'/client/dist')));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname,'client','dist','index.html'));
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success : false,
        statusCode,
        message
    });
});