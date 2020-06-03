const mongoose = require('mongoose')


const PuceSchema = new mongoose.Schema({
    latitude: {
      type: [Number],
     required : true
    }, 
    longitude: {
        type: [Number],
       required : true
    },
    speed : {
      type : [Number]
    },
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
    }
  },
  { timestamps: true }
);

module.exports = Puce = mongoose.model('Puce' , PuceSchema)