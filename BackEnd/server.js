

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
            
            
            socket.on('UpdateLocation', data  =>{
                console.log(data)
            //    if(Pdata(data)) {
            //     console.log('data recived from server:' +  data)
            //     // check the data before send it to the front end 
               io.emit('UpdateLocation' , data)
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
