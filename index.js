const express = require('express');
const app = express();
const port = 8000;

// Use express router
// Middleware to acess the routes/index.js by default index.js is loaded so we can write ./routes only
app.use('/',require('./routes'));

// set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port, function(err){
     if(err){
          console.log(`Error in running the server: ${err}`);
     }

     console.log(`Server is up and running on port : ${port}`);
})
