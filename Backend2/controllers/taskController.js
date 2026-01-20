const express = require('express');

let data = [
    {
        id: "4215",
        username: "Tanuja",
        password: "Tanuja@2005"
    },
    {
        id: "4200",
        username: "Devi",
        password: "Devi@2004"
    }
];

// POST DATA
const postData = async (req, res) => {
    let addData = req.body;
    try {
        if (!req.body) {
            return res.status(400).json("No data to add");
        }
        
        data.push(req.body);

        return res.status(201).json({addData});
    } catch (error) {
        return res.status(500).json(error);
    }
};

// GET DATA
const getData = async (req, res) => {
    try {
        if (data.length === 0) {
            return res.status(400).json("No data found");
        }

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error);
    }
};


exports.postData = postData;
exports.getData = getData;
exports.updateData = updateData;
