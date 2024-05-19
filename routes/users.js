const mongoose = require('mongoose');
const plm=require("passport-local-mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/pinterest")
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  posts: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Post'
  }],
  password: {
    type: String,
    
  },
  dp: {
    type: String // Assuming dp is a link to the user's display picture
  },
  fullName: {
    type: String,
    required: true
  }
});
userSchema.plugin(plm);
module.exports = mongoose.model('User', userSchema);


