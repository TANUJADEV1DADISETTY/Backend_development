import express from 'express'

const app = express();

app.use(express.json())

app.get('/get-user', (req, res) => {
    res.send("api-success");
})

app.post('/add-user', (req, res) => {
    let data = req.body;
    console.log(data);
    //logic to add the data
    res.send("data added");
})

app.put('/edit-user', (req, res) => {
    let data = req.body;
    console.log(data);
    //logic to add the data
    res.end("data edited");
})

app.delete('/delete-user', (req, res) => {
    let data = req.body;
    console.log(data);
    //logic to add the data
    res.end("data deleted");
})


app.listen(5000,()=>{
    console.log("server running at port 7007")
});
