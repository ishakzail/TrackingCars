
import React,{useEffect,useState} from 'react';
import { Button ,TextInput } from 'react-native-paper';
import {
  ActivityIndicator,
  Text,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'

const Home = (props ) => {
  
    const [username,setUsername] = useState("loading")

    
   const Boiler = async ()=>{
     try {
      const token = await AsyncStorage.getItem('token')
      fetch('http://10.0.2.2:5000/profil',{
        headers:new Headers({
          Authorization: token
        })
        })
        .then(data=>{
          console.log(data)
          
          
        })
        .catch(err => {
          console.log('erreur'+err)
        })
     } catch (error) {
       console.log(' catch finale home '+ error)
     }
      
       
    };

    useEffect(()=>{ Boiler() },[]);
    
      const logout =(props)=>{ 
      AsyncStorage.removeItem('token')
        .then(()=>{
        props.navigation.replace("Signin")
        })
      };

      // const addP = (props) => {
      //   AsyncStorage.setItem('token')
      //   .then(() => {
      //     props.navigation.replace('AddPuce')
      //   })
      // }

      // const ViewP = (props) => {
      //   AsyncStorage.setItem('token')
      //   .then(() => {
      //     props.navigation.replace('ListOfPuce')
      //   })
      // }

  return (
   <> 
   
    <Button 
      icon="plus" 
      mode="outlained" 
      onPress={() =>props.navigation.replace('AddPuce')}>
    Add Puce
    </Button>

  <Button  mode="outlained" onPress={() => props.navigation.replace('ListOfPuce')}>
    View Puce
  </Button>
  <Button  mode="outlained" onPress={() => console.log('Pressed')}>
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