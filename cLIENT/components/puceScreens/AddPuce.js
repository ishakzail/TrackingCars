import React,{useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import jwt_decode from 'jwt-decode'



const AddPuce = async () => {


  // const getId = async () => {
  //   try {
  //     const token = await AsyncStorage.getItem('token')
  //     console.log(token)
   

  //   } catch (error) {
  //     console.log('errror' , error)
  //   }
    
  // }

  // getId()


  return (
    <>
    <KeyboardAvoidingView behavior="position">
    <StatusBar backgroundColor="blue" barStyle="light-content" />
     <Text 
     style={{fontSize:35,marginLeft:18,marginTop:10,color:"#3b3b3b"}}>Add a new puce</Text>
     <View
     style={{
       borderBottomColor:"blue",
       borderBottomWidth:4,
       borderRadius:10,
       marginLeft:20,
       marginRight:150,
       marginTop:4
     }}
      />
     <Text
     style={{
       fontSize:20,marginLeft:18,marginTop:20
     }}
     
     >Login</Text>
     <TextInput
       label='Name'
       mode="outlined"
       value=''
       style={{marginLeft:18,marginRight:18,marginTop:18}}
       theme={{colors:{primary:"blue"}}}
       onChangeText=''
     />
      <TextInput
       label='legend'
       mode="outlined"
       value=''
       style={{marginLeft:18,marginRight:18,marginTop:18}}
       theme={{colors:{primary:"blue"}}}
       onChangeText=''
     />
      <TextInput
       label='latitude'
       mode="outlined"
       value=''
       style={{marginLeft:18,marginRight:18,marginTop:18}}
       theme={{colors:{primary:"blue"}}}
       onChangeText=''
     />
     <TextInput
       label='longitude'
       mode="outlined"
       value=''
       style={{marginLeft:18,marginRight:18,marginTop:18}}
       theme={{colors:{primary:"blue"}}}
       onChangeText=''
     />
     <Button 
       mode="contained"
       style={{marginLeft:18,marginRight:18,marginTop:18}}
       onPress=''
      >
       ADD
     </Button>
    
     
     </KeyboardAvoidingView>
  </>
  )
};

export default AddPuce;