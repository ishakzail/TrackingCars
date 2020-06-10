

const app = require('./src/app');

const PORT = process.env.PORT || 5000;

const Pdata = require('./src/controllers/puces/reciveDataPuce')

const server = app.listen(PORT, () => {
    console.log(`server is ready for connections on port ${PORT}`);
});

const io = require("socket.io").listen(server);

    try {
        io.on('connection', socket => {


            console.log('a user is connected ')

            

            // create or join a room by the user connected !
            socket.on('join' , userId =>{
               //  console.log('user Id :' , userId)
               console.log('user Id join' ,userId)

                socket.join(userId)


            })   
            socket.on('UpdateLocation', (data)  =>{
               //  console.log('data test back :' , (data))

                 
                const myFunc =  () => {
                  if(typeof data !== 'string'){
                        data.forEach( (element) => {
                        // console.log('hello world ')
                            
                            console.log('element ' , element)
                             // Pdata(element)
                        io.to(element.userId).emit('requLoc' , (element) )
                        });
                        
                        if(data.length <= 10) {
                            console.log('Done')
                            clearInterval(timerId)
                        }
                  }else{
                    console.log('data must be a json format')
                  }
                    
                };

                const timerId = setInterval(myFunc , 20000)


                // console.log('data lenght' , data.length)

            // //      // check the data before send it to the front end
           
            //    
            
            // if (Pdata(data) )
            //      console.log('data recived from server:' +  JSON.stringify(data))
            // else 
            //     console.log('impossible to add data to db ')
            // else 
            // console.log('add more data ')

            // const _id2 = data[1]['userId']

            // console.log('id 2 :' , _id2)
               
            // // send data to room specific with this userId

           
                // if(data.length > 0){
                //     data.forEach(element => {
                //         var elm = element
                //         console.log('element :' ,elm)
                //         io.emit('requLoc' , elm )
                        
                //     });
                    
                // }
                 
            
            //  io.emit('requLoc' , (data) )
            
           
                
            // io.to(_id2).emit('requLoc' , JSON.stringify(data))
            
            //    } else {
            //        console.log('something wrong in Pdata')
            //    }
            });
            socket.on('disconnect', () => {
                console.log('a user is disconnected !')
            })
        })
        
    } catch (error) {
        console.log(error)
    }
