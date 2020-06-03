import React ,   { Component  , useState , useEffect} from 'react'
import {    View, Text  ,
            SafeAreaView , Image ,
            TouchableOpacity , ScrollView , 
            StatusBar,
            KeyboardAvoidingView,
        }   from 'react-native';
import { Button ,TextInput} from 'react-native-paper';
import {CustomHeader} from '../components/index'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';




 export default function LoginScreen({navigation}) {

  const [username, setUsername] = useState('');
  
  const [password,setPassword]=useState('')

  const sendCred= async ()=>{

    try {
      await axios.post('http://192.168.1.105:5000/login' , {
      "username" : username,
      "password" : password
    
    })
    
    .then(async (resp ) => {
      console.log('logged in !')
      try {
          await AsyncStorage.setItem('token', resp.data.token)
                  
                 navigation.navigate("HomeApp")
          } catch (e) {
              console.log('error navigaton or async',e)
          }
    })
      } catch (error) {
          console.log("error in login is: " + error)
      }
  
  }
  
  return (
    
   <> 
   <KeyboardAvoidingView behavior="position">
     <StatusBar backgroundColor="blue" barStyle="light-content" />
      <Text 
      style={{fontSize:35,marginLeft:18,marginTop:10,color:"#3b3b3b"}}>welcome to</Text>
      <Text 
      style={{fontSize:30,marginLeft:18,color:"blue"}}
      >Tracking App</Text>
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
        label='Username'
        mode="outlined"
        value={username}
        style={{marginLeft:18,marginRight:18,marginTop:18 ,borderRadius:10}}
        theme={{colors:{primary:"blue"}}}
        onChangeText={(text)=>(setUsername(text))}
      />
      <TextInput
        label='password'
        mode="outlined"
        secureTextEntry={true}
        value={password}
        style={{marginLeft:18,marginRight:18,marginTop:18 ,borderRadius:40}}
        theme={{colors:{primary:"blue"}}}
        onChangeText={(text) => setPassword(text)}
      />
      <Button 
        mode="contained"
        style={{marginLeft:68,marginRight:68,marginTop:28 ,borderRadius:40}}
        onPress={() => sendCred()}
       >
        Login
      </Button>
      <TouchableOpacity>
        <Text
      style={{
        fontSize:18,marginLeft:18,marginTop:20
      }}
      onPress ={() => navigation.navigate("Register")} 
      >dont have an account ?</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
   </>
  );
}

