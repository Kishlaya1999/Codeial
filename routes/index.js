// Everytime we require express it is not going to create the new instance of express it is going to fetch the new instance
const express = require('express');


const router = express.Router();


// exporting it so that it is avalilable to index.js
module.exports = router;

