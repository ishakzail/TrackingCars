const mongoose = require('mongoose')


const AdminSchema = new mongoose.Schema({
    email: {
      type: String,
      required : true
    },
    password: {
      type: String,
      required : true
    },
    
  },
  { timestamps: true }
);

module.exports = Admin = mongoose.model('Admin' , AdminSchema)