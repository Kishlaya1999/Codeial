// Everytime we require express it is not going to create the new instance of express it is going to fetch the new instance
const express = require('express');

const router = express.Router();
// impporting the controller file so that we can specify it with the routes
const homeController = require('../controllers/home_controller');

// Specifing the routes 

// Action for ./ route is defined in controller/homeController 
router.get('./',homeController.home)



// exporting it so that it is avalilable to index.js
module.exports = router;

