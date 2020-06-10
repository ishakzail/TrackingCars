const Puce = require('../../models/puceModel')

const User = require('../../models/userModel')

    // get user Puces

        const getLastPosition = async (req,res) => {
           try {
                const {userId} = req.params;
                /* we use te the method populate to the users puces only to display it*/
                const DataPu =  await  User.findById(userId).populate('puces' , 'points')
                // .select('points')
                //  .slice('points' , -1)
                // .then(async (resp) =>{

                //     console.log(resp)
                //     if(resp){
                        
                // await  res.status(201).json(resp.puces)

                  
                // //     
                //      } else{
                //         res.send('there is no puce')
                //     }
                    
                // })
                // .catch(err =>{
                //     res.send('error get puce', err)
                // })

                console.log('DataPu :' , DataPu.puces)

                DataPu.aggregate([
                    {
                        $match : {
                            '_id1' : userId
                        }
                    },
                    {
                        $unwind : "$points"
                    },
                    {
                        $group : {
                            _id : "$_id1",
                            points : {$last : "points"}
                        }
                    }
                ])
                .then(respA =>{
                    console.log(respA)
                })

                // res.send(DataPu.puces)
                 // res.status(201).json(user.puces)

                 
               
           } catch (error) {
               console.log(error)
           } 
            
        }


        module.exports = getLastPosition;