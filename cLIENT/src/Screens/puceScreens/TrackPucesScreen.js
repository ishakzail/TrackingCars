import React from 'react' 
import { View , Text , StyleSheet, Button } from 'react-native'
import CustomHeader from '../../components/CustomHeader'
import { useEffect , useState } from 'react'
import  MapView  , {  PROVIDER_GOOGLE  ,  Marker } from 'react-native-maps'
import socket from '../../components/SocketConn'
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { TouchableOpacity } from 'react-native-gesture-handler'


const TrackPuces =  ({navigation}) => {

    const [pucesData , setPucesData] = useState([])
   

    useEffect(() => {

        socket.on('requLoc', pdata => {
        console.log('socket in')
        //console.log('data test front:' , pdata );
        setPucesData([pdata]);

        //   tab.push(pdata)
        //   console.log('tab :' , tab.points.coordinates.lat)
          
        })

        console.log('Puce data inside useEffect :', pucesData)

       // console.log('puce points lat: ' , pucesData.points.lat)

        

          
          

    } , [pucesData]);
    
    
    const [region, setRegion] = useState({
        latitude: 33.589886,
        longitude: -7.603869,
        latitudeDelta:0.0922,
        longitudeDelta: 0.05
      });

    return(
        
        <View style = {styles.container}>
            <CustomHeader title ="Tracking Map" isHome={true} navigation ={navigation} />
            <MapView
                provider = {PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                region={region}
                onRegionChangeComplete={region => setRegion(region)} >

               { 

                pucesData.length > 0 && pucesData.map((puce , index ) =>  (   
                        
                    <MapView.Marker 
                        key = {index}
                        title= {puce.Name}
                        description = {puce.legend}
                        coordinate={{ 
                        latitude :  puce.points.lat, 
                        longitude : puce.points.lng
                        }} 
                        
                        
                    />    
                   ))
                   
               }
                
            </MapView>  

            
      </View>
    )
 
}

const styles = StyleSheet.create({
    container : {
        ...StyleSheet.absoluteFillObject,
        height : 400
    },
    map : {
        ...StyleSheet.absoluteFillObject
    },
    button :{
    marginTop : 10 ,
    marginLeft : 10 ,
    marginRight : 10 
    }
}) 

export default TrackPuces;
