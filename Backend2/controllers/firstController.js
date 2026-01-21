const express = require("express");
const nodemailer = require('nodemailer');

const testingApi = (req, res) => {
    console.log('Responding...!');
}


const UploadFile = async(req,res) => {
    try{
        console.log(req.files)
        return res.status(200).json(req.files)
    }
    catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}



const nodemailer = require('nodemailer')
const TransportInfo = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"dtanuja3011@gmail.com",
        pass:""
    }
})

const SendMail = async(req,res) => {
    try{
        const result = await TransportInfo.sendMail({
            from:"dtanuja3011@gmail.com",
            to:"dtanuja3011@gmail.com",
            subject:"testing-subject",
            text:"kf lkasjd flaksjd flaksjfh lkasj fhlaksjd falskj lasdk",
            // attachments:[
            //     {
            //         filename:"25M11CS033 1.JPG",
            //         path:"http://localhost:9000/25M11CS033%201.JPG"
            //     }
            // ]
        })
        console.log(result)
        return res.status(200).json(result)
    }
    catch(err){
        return res.status(500).json(err)
    }
}

exports.testingApi = testingApi;
exports.UploadFile = UploadFile;
exports.SendMail = SendMail;