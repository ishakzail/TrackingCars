import React, { useState} from 'react'
import {Button , TextInput } from 'react-native-paper'

import {
  View ,
  Text ,
  StatusBar ,
  TouchableOpacity , 
  KeyboardAvoidingView
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Axios from 'axios'
import CustomHeader from '../../components/CustomHeader'
import jwt_decode from 'jwt-decode'


const AddPuce = ({navigation}) =>{

  const [Name , setName] = useState('');
  const [legend , setLegend] = useState('')

    const newUserPuce = async () => {
       const token =  await AsyncStorage.getItem('token')

     
      const decoded = jwt_decode(token)

  
      const userId = decoded._id

      await Axios.post(`http://192.168.1.105:5000/${userId}/Newpuces`,{
        "Name" : Name ,
        "legend" : legend
      })
      .then( async resp => {
        console.log('resp :' , resp.data)
        try {
          if(Name && legend)
            await  navigation.navigate("PucesList")
          else 
            alert('fields are empty')
        } catch (error) {
          console.log('error add puce axios :' + error)
        }
      })
    }

      return(
        <KeyboardAvoidingView behavior="position">
         <CustomHeader title ="Add Puce" isHome={true} navigation ={navigation} />
          <StatusBar backgroundColor="blue" barStyle="light-content" />
              
              <Text
              style={{
                fontSize:20,marginLeft:18,marginTop:20
              }}
              
              >Add new puce</Text>
              <TextInput
                label='Name'
                mode="outlined"
                value={Name}
                style={{marginLeft:18,marginRight:18,marginTop:18}}
                theme={{colors:{primary:"blue"}}}
                onChangeText={(text) => setName(text)}
              />
                <TextInput
                label='legend'
                mode="outlined"
                value={legend}
                style={{marginLeft:18,marginRight:18,marginTop:18 , }}
                theme={{colors:{primary:"blue"}}}
                onChangeText={(text) => setLegend(text)}
              />
              <Button 
                mode="contained"
                style={{marginLeft:18,marginRight:18,marginTop:18 , borderRadius : 48 , backgroundColor : 'black'}}
                onPress={ ()=> newUserPuce() }
                >
                ADD
              </Button>
              
     
      </KeyboardAvoidingView>
      );
}
export default AddPuce ;


