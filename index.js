const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// Used for session cookeie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

app.use(express.urlencoded());

app.use(cookieParser());

// telling the middleware that where to look for assets
app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts form sub pages and insert in head of layouts.css
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



// set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
     name: 'coieial',
     secret: 'secretKey', 
     saveUninitialized: false,
     resave:false,
     cookie:{
          maxAge:(1000 * 60 * 100)
     }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// Use express router
// Middleware to acess the routes/index.js by default index.js is loaded so we can write ./routes only
app.use('/',require('./routes'));

app.listen(port, function(err){
     if(err){
          console.log(`Error in running the server: ${err}`);
     }

     console.log(`Server is up and running on port : ${port}`);
})
