import React ,   { Component  , useState , useEffect} from 'react'
import {    View, Text  ,
            SafeAreaView , Image ,
            TouchableOpacity , ScrollView , 
            StatusBar,
            KeyboardAvoidingView,
        }   from 'react-native';
import { Button ,TextInput} from 'react-native-paper';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';




 export default function LoginScreen({navigation}) {

  const [username, setUsername] = useState('');
  
  const [password,setPassword]=useState('')

  const sendCred= async ()=>{

    try {
      await axios.post('http://192.168.1.110:5000/login' , {
      "username" : username,
      "password" : password
    
    })
    
    .then(async (resp ) => {
      console.log('logged in !')
      console.log(resp)
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
     <StatusBar backgroundColor="green" barStyle="light-content" />
     <Image
     source ={require('../assets/images/city-map.png')}
     style = {{
       height : 150 ,
       width : 150 ,
       marginLeft : 100
     }}
     >

     </Image>
     <Text 
      style={{fontSize:22, marginLeft : 20 , marginTop : 18,color:"green"}}
      >Welcome to Tracking App</Text>
      <View
      style={{
        borderBottomColor:"green",
        borderBottomWidth:4,
        borderRadius:20,
        marginLeft:18,
        marginRight:18,
        
      }}
       />
    
      <TextInput
        label='Username'
        mode="outlined"
        value={username}
        style={{marginLeft:18,marginRight:18,marginTop:18 ,borderRadius:90}}
        theme={{colors:{primary:"green"}}}
        onChangeText={(text)=>(setUsername(text))}
      />
      <TextInput
        label='password'
        mode="outlined"
        secureTextEntry={true}
        value={password}
        style={{marginLeft:18,marginRight:18,marginTop:18 ,borderRadius:40}}
        theme={{colors:{primary:"green"}}}
        onChangeText={(text) => setPassword(text)}
      />
      <Button 
        mode="contained"
        style={{marginLeft:18,marginRight:18,marginTop:18 ,borderRadius:40 , backgroundColor : 'green'}}
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

