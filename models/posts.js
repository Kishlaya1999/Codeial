const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
     content:{
          type:String,
          required : true
     },
     user:{
          // establishing the link between posts and user using the objectId(visible in Studio 3T) of the user which is always unique
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
     }
},{
     timestamps: true
});

// telling that it is a  model in the database
// nmae of the model id Post and schema that it follows is postSchema
const Post = mongoose.model('Post',postSchema);
module.exports = Post;
