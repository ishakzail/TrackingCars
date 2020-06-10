const Puce = require('../../models/puceModel')



    getAllPuces = async (req , res) => {
        Puce.find(function(err, puce) {
            if (err)
                res.send(err);
            if(puce)
            res.send(puce)
        });
    }

    module.exports = getAllPuces ;