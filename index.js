const express = require('express');
const app = express();
const port = 8000;

// Use express router
// Middleware to acess the routes/index.js by default index.js is loaded so we can write ./routes only
app.use('/',require('./routes'));

// app.get('/',function(req,res){
//      res.send('<h1>Welcome</h1>');
// })

app.listen(port, function(err){
     if(err){
          console.log(`Error in running the server: ${err}`);
     }

     console.log(`Server is up and running on port : ${port}`);
})
