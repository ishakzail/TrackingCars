import React, { Component , useEffect, useState } from "react";

import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";
import { View  , Image , Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ViewProfile = ({navigation}) => {

    const [username , setUsername] = useState('')
    const [lastName , setLastName] = useState('')
    const [firstName , setFirstName] = useState('')
    const [email , setEmail] = useState('')
    const [createdAt , setCreatedAt] = useState('')

    const ComponentDidMount = async ()=>{

        try {
            const token = await AsyncStorage.getItem('token')
        await axios.get('http://192.168.1.110:5000/profil',{
           headers:{
             'Authorization' : token
             }
           })
           .then(resp =>{
               
               setUsername(resp.data.username)
               setFirstName(resp.data.firstName)
               setLastName(resp.data.lastName)
               setEmail(resp.data.email)
                setCreatedAt(resp.data.createdAt)
               console.log(resp.data)
           })
           .catch(err => {
             console.log('erreur axios profile: '+err)
           })
        } catch (error) {
          console.log(' catch finale home '+ error)
        }
       
    };
       
       useEffect(()=>{ ComponentDidMount() },[]);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title ="Profile" isHome={true} navigation ={navigation} />
        <View style={{height : 150 , alignItems : 'center' , justifyContent : 'center'}}>
                <Image 
                  source={require('../../assets/images/user-Profile.png')} 
                  style = {{ height : 120 , width : 120 , borderRadius : 60 }}
                />
                
        </View>

        <TouchableOpacity
        style={{ marginTop : 20 }}>
                      
                      <Image
                      source = {require('../../assets/images/user-green.png')}
                      style ={{width : 40 , height : 40 ,marginLeft : 20 , marginTop : 10  , position : 'absolute'  ,resizeMode : 'contain'}}

                      />
                      
                    <Text
                      style ={{marginLeft : 80 , marginBottom : 10 , marginTop : 20}}
                      >UserName : {username}</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{marginTop : 20 }}>
                    
                      <Image
                      source = {require('../../assets/images/mail-green.png')}
                      style ={{width : 40 , height : 40 ,marginLeft : 20 , marginTop : 10  , position : 'absolute'  ,resizeMode : 'contain'}}

                      />
                      
                    <Text
                      style ={{marginLeft : 80 , marginBottom : 10 ,marginTop : 20}}
                      >Email : {email}</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{marginTop : 20 }}>
                    
                      <Image
                      source = {require('../../assets/images/first-last-name-green.png')}
                      style ={{width : 40 , height : 40 ,marginLeft : 20 , marginTop : 10  , position : 'absolute'  ,resizeMode : 'contain'}}

                      />
                      
                    <Text
                      style ={{marginLeft : 80 , marginBottom : 10 ,marginTop : 20}}
                      >First Name : {firstName}</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{marginTop : 20 }}>
                    
                      <Image
                      source = {require('../../assets/images/first-last-name-green.png')}
                      style ={{width : 40 , height : 40 ,marginLeft : 20 , marginTop : 10  , position : 'absolute'  ,resizeMode : 'contain'}}

                      />
                      
                    <Text
                      style ={{marginLeft : 80 , marginBottom : 10 ,marginTop : 20}}
                      >Last Name : {lastName}</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={{marginTop : 20 }}>
                    
                      <Image
                      source = {require('../../assets/images/calendar-green.png')}
                      style ={{width : 40 , height : 40 ,marginLeft : 20 , marginTop : 10  , position : 'absolute'  ,resizeMode : 'contain'}}

                      />
                      
                    <Text
                      style ={{marginLeft : 80 , marginBottom : 10 ,marginTop : 20}}
                      >Created At : {createdAt}</Text>
        </TouchableOpacity>
    
        

    
    </SafeAreaView>
  )
  }
export default ViewProfile;