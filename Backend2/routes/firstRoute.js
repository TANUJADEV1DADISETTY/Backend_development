const express = require("express");
const firstController = require('../controllers/firstController');

const route = express.Router();

route.get('/get-data', firstController.testingApi);

module.exports = route;