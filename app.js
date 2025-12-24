import express from 'express';
import cors from 'cors';
import mongoose, { mongo } from 'mongoose';
import router from './routes/studentRouter.js';


const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect("mongodb://localhost:27017").then(() => console.log("db connected"))
.catch((error) => console.log(error));

app.use('/', router);

app.get('/users', (req, res) => {
    console.log("hello this is");
    res.send("hello this is from backend");
})

app.listen(5000,()=>{
    console.log("server running at port 7007")
});
