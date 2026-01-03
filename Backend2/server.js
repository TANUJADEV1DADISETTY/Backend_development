//import express
const express = require("express");

//to create the object -- we will get the functionalities
const app = express();

//start the server
app.listen(9000, () => {
    console.log('Server running at 9000');
})