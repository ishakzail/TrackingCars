const mongoose = require('mongoose')

const GeoSchema = new mongoose.Schema ({
    type : {
      type : String,
      default : "Point"
    },
    lat : {
      type : Number
    },
    lng : {
      type : Number
    },
    speed : {
      type : Number
    },
    registerAt : {
      type : Date ,
      default : Date.now
    }
    
})


const PuceSchema = new mongoose.Schema({
    legend: {
      type: String,
      required : true
    },
    Name : {
        type: String,
    },
    owner : {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'User'
    },
    points :[GeoSchema]
  },
  { timestamps: true }
);

module.exports = Puce = mongoose.model('Puce' , PuceSchema)