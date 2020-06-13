import React from 'react' 
import { View , Text , StyleSheet, Button } from 'react-native'
import CustomHeader from '../../components/CustomHeader'
import { useEffect , useState } from 'react'
import  MapView  , {  PROVIDER_GOOGLE  ,  Marker } from 'react-native-maps'
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default  class Statistics extends React.Component{

    constructor(){
        super()
        this.state = {
            DataPuce : []
        }

        
    }

    getLastPosition = async  () =>{

        const token = await AsyncStorage.getItem('token')
            const decoded = jwt_decode(token)

            // console.log(decoded)

            const userId = decoded._id

            await axios.get(`http://192.168.1.110:5000/${userId}/getLastPosition`)
            .then(async resp =>{
               //  console.log('resp in staistic map' , JSON.stringify(resp.data))

                // console.log(JSON.stringify(resp.data))
                
                await this.setState({
                    DataPuce : resp.data
                })
                 
               console.log('Data Puce : ' , DataPuce)
                  
            })
            .catch(err =>{
                console.log('error in getLastPosition :' , err)
            })
            
    }

    getInitialState() {
        return {
          region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          },
        };
      }
      
      onRegionChange(region) {
        this.setState({ region });
      }
      
      render() {
        return (
        <View style = {{
            ...StyleSheet.absoluteFillObject,
                 height : 400
                 }}>
        <CustomHeader title ="Statistics" isHome={true} navigation ={this.props.navigation} />
          <MapView
            provider = {PROVIDER_GOOGLE}
            region={{latitude: 33.589886,
            longitude: -7.603869,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421}}
            style = {{...StyleSheet.absoluteFillObject}}
          />

            <TouchableOpacity
                style = {{
                    marginLeft : 20 ,
                    marginTop : 20 
                    }}
                onPress = {() => this.getLastPosition()}
            >

                <Text> Get Last Position </Text>
            </TouchableOpacity>
        </View>
        );
      }

    

    styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }
    })

}

//     const [DataPuce , setDataPuce] = useState([])
    
   

    

    
//     const [region, setRegion] = useState({
//         latitude: 33.589886,
//         longitude: -7.603869,
//         latitudeDelta:0.0922,
//         longitudeDelta: 0.05
//       });

//     return(
        
//         <View style = {styles.container}>
//             <CustomHeader title ="Statistic Map" isHome={true} navigation ={navigation} />
//             <MapView
//                 provider = {PROVIDER_GOOGLE}
//                 style={{ flex : 1}}
//                 region={region}
//                 onRegionChangeComplete={region => setRegion(region)} >

//                { 

//                 DataPuce && DataPuce.map((puce , index ) =>  (   
//                     <MapView.Marker 
//                         key = {index}
//                         title= {puce.Name}
//                         description = {puce.legend}
//                         coordinate={{ 
//                         latitude :  (puce.points.lat),
//                         longitude : (puce.points.lng)
//                         }} 
//                     />    
//                    ))
                   
//                }
                
//             </MapView>  

//             <TouchableOpacity
//             style = {{
//                 marginLeft : 20 ,
//                 marginTop : 20 
//             }}
//             onPress = {() => getLastPosition()}
//             >

//                 <Text> Get Last Position </Text>
//             </TouchableOpacity>
           
//       </View>
//     )
 
// }

// const styles = StyleSheet.create({
//     container : {
//         ...StyleSheet.absoluteFillObject,
//         height : 400
//     },
//     map : {
//         ...StyleSheet.absoluteFillObject
//     },
//     button :{
//     marginTop : 10 ,
//     marginLeft : 10 ,
//     marginRight : 10 
//     }
// }) 


