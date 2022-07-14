const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     email:{
          type: String,
          required: true,
          unique: true
     },
     password:{
          type: String,
          required: true,
     },
     name:{
          type:String,
          required: true
     }
},{
     // Contains the time of creation and updation of object as createdAt and updatedAt
     timestamps: true
});

const user = mongoose.model('User',userSchema);

module.exports = user;