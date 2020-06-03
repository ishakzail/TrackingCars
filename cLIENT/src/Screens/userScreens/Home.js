
import React,{useEffect,useState} from 'react';
import { Button ,TextInput } from 'react-native-paper';
import {
  ActivityIndicator,
  StyleSheet ,
  Text,
  View ,
  Alert,
  SafeAreaView , 
  TouchableOpacity
} from 'react-native';


import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';


const Home =  (props) => {
  
    const [username,setUsername] = useState("loading")

    

   const Boiler = async ()=>{
     try {
      
      const token = await AsyncStorage.getItem('token')

     await axios.get('http://192.168.1.105:5000/profil',{
        headers:{
          'Authorization' : token
          }
        })
        .catch(err => {
          console.log('erreur axios home: '+err)
        })
     } catch (error) {
       console.log(' catch finale home '+ error)
     }
      
    
    };
    
    useEffect(()=>{ Boiler() },[]);
  
    const logout =  (props)=>{ 
      AsyncStorage.removeItem('token')
        .then(()=>{
        props.navigation.navigation("Signin")
        });
    };

  return (
  <>  
   
   <Button 
     icon="plus" 
     mode="outlained" 
     onPress={() => props.navigation.replace("AddPuce")}>
   Add Puce
   </Button>

 <Button  
 mode="outlained" 
 onPress={() => props.navigation.replace("ListOfPuce")}>
   View Puce
 </Button>
 <Button  
 mode="outlained" 
 onPress={() => props.navigation.replace("TrackPuces")}>
   Track Puce
 </Button>
 <Button mode="outlained" onPress={() => console.log('Pressed')}>
   View Profil
 </Button>

   <Button 
       mode="contained"
       style={{marginLeft:18,marginRight:18,marginTop:408}}
        onPress={() => logout(props)}>
       logout
     </Button>
  
  </>
    
  );
};


export default Home;


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  headline: {
    height: 246,
    overflow: "hidden",
    marginTop: 80
  },
  image: {
    flex: 1
  },
  image_imageStyle: {},
  overlay: {
    backgroundColor: "rgba(30,26,26,0.4)",
    flex: 1
  },
  scienceChannel: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 43,
    alignSelf: "center"
  },
  following: {
    width: 90,
    height: 40,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 29,
    alignSelf: "center"
  },
  text: {
    color: "rgba(31,178,204,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  followers: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 39,
    alignSelf: "center"
  },
  scrollArea: {
    height: 413,
    marginTop: 1
  },
  scrollArea_contentContainerStyle: {
    height: 413
  },
  scrollViewEntry: {
    height: 100
  },
  scrollViewEntry4: {
    width: 360,
    height: 100
  },
  scrollViewEntry2: {
    width: 360,
    height: 100
  },
  scrollViewEntry3: {
    width: 360,
    height: 100
  },
  headerX: {
    height: 80,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginTop: -740
  }
});
