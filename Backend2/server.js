//import express
const express = require("express");
const firstRoute = require("./routes/firstRoute");

//to create the object -- we will get the functionalities
const app = express();

app.use('/', firstRoute);

//start the server
app.listen(9000, () => {
    console.log('Server running at 9000');
})