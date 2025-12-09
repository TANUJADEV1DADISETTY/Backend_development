import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    res.send("hello this is from backend");
})
app.listen(4000, () => {
    console.log("Server running at port 4000");
})  