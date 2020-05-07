const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    firstName: {
      type: String,
     required : true
    }, 
    lastName: {
        type: String,
       required : true
      },
    isValid : {
      type: Boolean,
      default : false
    },

    email: {
      type: String,
      required : true
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"]
    },
    username: {
      type: String,
      required : true
    },
    password: {
      type: String,
      required : true
    },
    verifToken : {
        type: String,
        
    },
    puces : [{
      type : mongoose.Schema.Types.ObjectId,
      ref : 'Puce'
    }]
    
  },
  { timestamps: true }
);

module.exports = User = mongoose.model('User' , UserSchema)