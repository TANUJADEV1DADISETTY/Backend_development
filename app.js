import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/studentRouter.js';

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://dtanuja3011_db_user:Tanuja%402005@cluster0.pndakol.mongodb.net/studentDB"
)
.then(() => console.log("db connected"))
.catch((error) => console.log(error));

app.use('/', router);

app.get('/users', (req, res) => {
    res.send("hello this is from backend");
});

app.listen(7007, () => {
    console.log("server running at port 7007");
});
