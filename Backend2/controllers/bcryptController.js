const express = require("express");
const Bcrypt = require("bcrypt");

const encryptPassword = async(req, res) => {
    try {
        const encoded = await Bcrypt.hash(req.body.password, 10);
        return res.status(201).json(encoded);
    }
    catch(err) {
        console.log(err);
        return res.status(500).json(err);
    }
}


const decryptPassword = async(req, res) => {
    try {
        const encoded = "$2b$10$XNHJlybBaMYo3QRMEhdIluVuvvwKY.i7Z2Q1IE3krB9xTDlrZk/p."
        const result = await Bcrypt.compare(req.body.password, encoded);
        return res.status(201).json(result);
    }
    catch(err) {
        console.log(err);
        return res.status(500).json(err);
    }
}
exports.encryptPassword = encryptPassword;
exports.decryptPassword = decryptPassword;