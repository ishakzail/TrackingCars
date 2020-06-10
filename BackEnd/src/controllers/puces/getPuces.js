const Puce = require('../models/puceModel')



    getPuces = async (req , res) => {
        Puce.find(function(err, puces) {
            if (err)
                res.send(err);
            if(puces)
            console.lgo('points puces :' , puces.points)
        });
    }

    module.exports = getPuces ;