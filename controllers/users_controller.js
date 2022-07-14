// importing the user schema
const User = require('../models/user');

module.exports.profile = function (req, res) {
     // return res.end("<h1>User Profile</h1>")
     return res.render('users', {
          title: "Users"
     })
}

// Render the sign up page
module.exports.signUp = function (req, res) {
     return res.render('user_sign_up', {
          title: 'Codeial | Sign Up'
     })
}

// Render the sign in page
module.exports.signIn = function (req, res) {
     return res.render('user_sign_in', {
          title: 'Codeial | Sign In'
     })
}

// get the sign up data
module.exports.create = function (req, res) {
     // Checking wether the password and confirm password is same or not if not we will redirect user to signUp page
     if (req.body.password != req.body.confirm_password) {
          return res.redirect('back');
     }

     // finding user with the same email Id if the it exist then we will not create it, if it does't exit then we will create it
     User.findOne({
          email: req.body.email
     }, function (err, user) {
          if (err) {
               console.log('Error in finding  user in siging up');
               return;
          }
          // If user not found then creating the user and redirecting to signIn page
          if (!user) {
               User.create(req.body, function (err, user) {
                    if (err) {
                         console.log('Error in creating user while siging up');
                         return;
                    }

                    return res.redirect('/users/signIn')
               })
          }else{   //If user is already present
               return res.redirect('back');
          }
     })
}

// sign in and create the sission for the user
module.exports.createSession = function (req, res) {
     // TODO
}