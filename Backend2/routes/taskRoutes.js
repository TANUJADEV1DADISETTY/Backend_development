const express = require('express');
const taskController = require('../controllers/taskController');

const route = express.Router();
route.use(express.json());

const multer = require('multer')
const path = require('path')

const Storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const FileFilters = (req,file,cb) =>{
    const AllowedTypes = /png|jpg|jpeg|svg/
    const extension = path.extname(file.originalname).toLowerCase()
    if(AllowedTypes.test(extension)){
        cb(null,true)
    }
    else{
        cb(new Error("Not Valid Formate"))
    }
}

const Upload = multer({
    storage:Storage,
    fileFilter : FileFilters,
    limits:{
        fileSize:1024*1024*2
    }
})

route.post("/file-upload",Upload.file('file'),FirstController.UploadFile)
route.post("/post-data", taskController.postData);
route.get("/get-data", taskController.getData);
route.put("/update-data/:id", taskController.updateData);

module.exports = route;