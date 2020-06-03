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
import axios from 'axios'
import CustomHeader from '../../components/CustomHeader'
import jwt_decode from 'jwt-decode'


const EditUserPuce = ({route , navigation}) => {

    const [Name , setName] = useState('')
    const [legend , setLegend] = useState('')

    const {id} = route.params

    
    

    editPuce = async () => {
        
        try {   

            //  console.log('puce id :' , id)
            const token = await AsyncStorage.getItem('token')
            const decoded = jwt_decode(token)

             // console.log(decoded)

            const userId = decoded._id

            axios.put(`http://192.168.1.105:5000/${userId}/editUserPuce/${id}` , 
                 { 
                'Name' : Name ,
                'legend' : legend
            })
            .then(async resp => {
                setName(resp.data.Name)
                setLegend(resp.data.legend)
                await  navigation.push('PucesList')
                
    
                
            })
            .catch(err => {
                console.log('error catch after then :' ,err)
            })
            
        } catch (error) {
            console.log('error in edit puce first try :' , error)
        }
   }


   return (
    <KeyboardAvoidingView behavior="position">
    <CustomHeader title ="EditPuce" navigation = {navigation} />
     <StatusBar backgroundColor="blue" barStyle="light-content" />
         
         <Text
         style={{
           fontSize:20,marginLeft:18,marginTop:20
         }}
         
         >update a puce</Text>
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
           onPress={ ()=> editPuce(id) }
           >
           Update
         </Button>
         

 </KeyboardAvoidingView>
   )

}

export default EditUserPuce;
