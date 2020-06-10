const tools = require('../../tools/index')
const mongoose = require('mongoose')    
const User = require('../../models/userModel')
const Puce = require('../../models/puceModel')



    // send data + _id puce and _id user using socket io 
    // chack data 
    const DataPuce =async  (data) => {
        try{

        
        const { speed , Name} = data

         // const PuceData = {data}
         
        
         // console.log(" DataRecived from server : ", (data))
        const Pdata = await Puce.findOne(
               { Name}
        ) 
                try{
                    if(Pdata){
                        
                        await Puce.updateMany(
                                {Name : Name} ,
                                { $push : {
                                    points : {
                                            
                                            lat : data.points.lat,
                                            lng : data.points.lng,
                                            speed : data.points.speed
                                        }
                                    }
                                } 
                            )
                        
                            console.log('data is added check your DB')
                            
                            return true;
                         
                     }else{
                         console.log('impossible to add data')
                         return false ;
                     }
                }
                catch(err) {
                    console.log('Pdata error : ' + err)
                }
                
            
        
    }
    catch (error) {
        console.log('error DATA PUCE :' + error)
    }
    }



    module.exports = DataPuce;