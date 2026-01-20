//import express
const express = require("express");
// const firstRoute = require("./routes/firstRoute");
const taskRoute = require("./routes/taskRoutes");

//to create the object -- we will get the functionalities
const app = express();
app.use(express.json());
// app.use('/', firstRoute);
app.use('/', taskRoute);



app.use(express.static(path.join(__dirname,"uploads")))

//start the server
app.listen(9000, () => {
    console.log('Server running at 9000');
})