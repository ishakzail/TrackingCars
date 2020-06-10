const User = require('../../models/userModel')



    getAllUser = async (req , res) => {
        User.find(function(err, user) {
            if (err)
                res.send(err);
            if(user)
            res.send(user)
        });
    }

    module.exports = getAllUser ;