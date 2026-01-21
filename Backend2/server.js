// //import express
// const express = require("express");
// // const firstRoute = require("./routes/firstRoute");
// const taskRoute = require("./routes/taskRoutes");

// const cookieparser = require("cookie-parser");

// //to create the object -- we will get the functionalities
// const app = express();
// app.use(express.json());
// // app.use('/', firstRoute);
// app.use('/', taskRoute);

// app.use(Cookieparser())
// app.use(
//   cors({
//     origin: "http://localhost:5173", 
//     credentials: true         
//   })
// );


// app.use(express.static(path.join(__dirname,"uploads")))

// //start the server
// app.listen(9000, () => {
//     console.log('Server running at 9000');
// })



const express = require("express");
const taskRoute = require("./routes/taskRoutes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.use("/", taskRoute);
app.use(express.static(path.join(__dirname, "uploads")));

app.listen(9000, () => {
  console.log("Server running at 9000");
});
