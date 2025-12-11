import express from 'express';
import router from './routes/studentRouter.js';


const app = express();

app.use(express.json());

app.use('/', router);

app.listen(5000,()=>{
    console.log("server running at port 7007")
});
