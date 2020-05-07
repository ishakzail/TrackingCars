
const mongoose = require('mongoose')    
const Puce = require('../models/puceModel')
const tools = require('../tools/index')
    
    AddPuce  = async (req ,res) => {
        const  {latitude , longitude , legend , Name} = req.body
        try {
            const puceData = new Puce({
                latitude , longitude , Name , legend 
            })
            Puce.findOne({
                Name
            })
            .then(async puce =>{
                
                    if(!puce){
                            Puce.create(puceData)
                            res.send('Puce created Successfully')
                    }
                    else{
                        res.send('name of the puce already exists !')
                    }
               
                    
            })
        } catch (error) {
            res.send("error is : " + error)
        }
    }




    module.exports = AddPuce;