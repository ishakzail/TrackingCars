import React , { Component, useState } from 'react'
import { Button ,TextInput} from 'react-native-paper';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';

import CustomHeader from '../components/CustomHeader'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';




export default  EditProfile = ({navigation}) => {


  const [username , setUsername] = useState('')
  const [lastName , setLastName] = useState('')
  const [firstName , setFirstName] = useState('')
  const [password , setPassword] = useState('')
  const [oldPassword  , setOldPassword] = useState('')
  
  const editUser = async () => {

  
    try {   

        //  console.log('puce id :' , id)
        const token = await AsyncStorage.getItem('token')
        const decoded = jwt_decode(token)

         // console.log(decoded)

        const userId = decoded._id

        axios.put(`http://192.168.1.110:5000/editUser/${userId}` , 
             { 
            'username' : username ,
            'lastName' : lastName,
            'firstName' : firstName ,
            'password' : password,
            'oldPassword': oldPassword         
        })
        .then(async resp => {
          if(data.resp)
            setUsername(resp.data.username)
            setLastName(resp.data.lastName)
            setFirstName(resp.data.firstName)
            setPassword(resp.data.password)

            await  navigation.push('ProfileScreen')
            

            
        })
        .catch(err => {
            console.log('error catch after then :' ,err)
        })
        
    } catch (error) {
        console.log('error in edit user first try :' , error)
    }
}
    
        return (
                <>
             <KeyboardAvoidingView behavior="position">
             <CustomHeader title ="Edit Profile" navigation={navigation} />
             <ScrollView>
               <StatusBar backgroundColor="green" barStyle="light-content" />
               
               
                
                <View
                style={{
                  borderBottomColor:"green",
                  borderBottomWidth:4,
                  borderRadius:10,
                  marginLeft:20,
                  marginRight:20,
                  marginTop:4
                }}
                 />
                 
                        <TextInput
                        label='UserName'
                        mode="outlined"
                        value={username}
                        style={{marginLeft:18,marginRight:18,marginTop:18}}
                        theme={{colors:{primary:"green"}}}
                        onChangeText ={(text) => setUsername(text)}
                    
                        />
                        <TextInput
                        label='Last Name'
                        mode="outlined"
                        value={lastName}
                        style={{marginLeft:18,marginRight:18,marginTop:18}}
                        theme={{colors:{primary:"green"}}}
                        onChangeText ={(text) => setLastName(text)}
                    
                        />
                        <TextInput
                        label='First Name'
                        mode="outlined"
                        value={firstName}
                        style={{marginLeft:18,marginRight:18,marginTop:18}}
                        theme={{colors:{primary:"green"}}}
                        onChangeText ={(text) => setFirstName(text)}
                    
                        />
                        <TextInput
                        label='old password'
                        mode="outlined"
                        secureTextEntry={true}
                        value ={oldPassword}
                        onChangeText = {(text) => setOldPassword(text)}
                        style={{marginLeft:18,marginRight:18,marginTop:18}}
                        theme={{colors:{primary:"green"}}}
                        />
                        <TextInput
                        label='new password'
                        mode="outlined"
                        secureTextEntry={true}
                        value = {password}
                        onChangeText = {(text) => setPassword(text)}
                        style={{marginLeft:18,marginRight:18,marginTop:18}}
                        theme={{colors:{primary:"green"}}}
                        />
                        
                        
                        <TouchableOpacity>
                        <Button 
                            mode="contained"
                            style={{marginLeft:18,marginRight:18,marginTop:18 , borderRadius :50 , backgroundColor : 'green'}}
                        onPress={() => editUser(props)}>
                            UPdate
                        </Button>
                        </TouchableOpacity>
                        </ScrollView>
                
                
              </KeyboardAvoidingView>
              
             </>
    
          );
          
}