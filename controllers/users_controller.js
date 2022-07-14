module.exports.profile = function(req,res){
     // return res.end("<h1>User Profile</h1>")
     return res.render('users',{
          title : "Users"
     })
}

// Render the sign up page
module.exports.signUp = function(req,res){
     return res.render('user_sign_up',{
          title: 'Codeial | Sign Up'
     })
}

// Render the sign in page
module.exports.signIn = function(req,res){
     return res.render('user_sign_in',{
          title: 'Codeial | Sign In'
     })
}

// get the sign up data
module.exports.create = function(req,res){
     // TODO
}

// sign in and create the sission for the user
module.exports.createSession = function(req, res){
     // TODO
}
