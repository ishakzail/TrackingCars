const Puce = require('../models/puceModel')



    getPuces = async (req , res) => {
        Puce.find(function(err, puces) {
            if (err)
                res.send(err);

            res.json(puces);
        });
    }

    module.exports = getPuces ;