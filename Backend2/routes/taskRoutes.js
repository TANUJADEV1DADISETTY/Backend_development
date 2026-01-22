// const express = require('express');
// // const taskController = require('../controllers/taskController');
// // const firstController = require('../controllers/firstController');
// const tokenController = require('../controllers/tokenController');
// // const multer = require('multer');
// // const path = require('path');


// const route = express.Router();
// route.use(express.json());


// // const Storage = multer.diskStorage({
// //     destination:function(req,file,cb){
// //         cb(null,"uploads")
// //     },
// //     filename:function(req,file,cb){
// //         cb(null,file.originalname)
// //     }
// // })

// // const FileFilters = (req,file,cb) =>{
// //     const AllowedTypes = /png|jpg|jpeg|svg/
// //     const extension = path.extname(file.originalname).toLowerCase()
// //     if(AllowedTypes.test(extension)){
// //         cb(null,true)
// //     }
// //     else{
// //         cb(new Error("Not Valid Formate"))
// //     }
// // }

// // const Upload = multer({
// //     storage:Storage,
// //     fileFilter : FileFilters,
// //     limits:{
// //         fileSize:1024*1024*2
// //     }
// // })
// console.log(tokenController.GenerateToken);

// // route.post("/file-upload",Upload.file('file'),firstController.UploadFile)
// // route.post("/post-data", taskController.postData);
// // route.get("/get-data", taskController.getData);
// // route.put("/update-data/:id", taskController.updateData);
// route.get("/get-token", tokenController.GenerateToken);


// module.exports = route;


const express = require('express');
const { GenerateToken, Verify } = require('../controllers/tokenController');
const bcryptController = require('../controllers/bcryptController');

const route = express.Router();
route.use(express.json());

route.get("/get-token", GenerateToken);
route.get("/verify-token", Verify);
route.post("/encrypt-token", bcryptController.encryptPassword);
route.post("/decrypt-token", bcryptController.decryptPassword);



module.exports = route;
