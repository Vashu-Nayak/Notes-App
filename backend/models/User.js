const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        requied : true,
    },
    email : {
        type : String,
        requied : true,
        unique : true,
    },
    password : {
        type : String,
        requied : true,
    },
    role: { 
      type: String, 
      default: 'User', 
      enum: ['User', 'Admin'] 
    },
})

const User = mongoose.model("User", userSchema);
module.exports={
    User
}
