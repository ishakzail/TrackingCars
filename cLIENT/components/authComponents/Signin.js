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

const Signin = (props) => {

  const [username, setUsername] = useState('');
  
  const [password,setPassword]=useState('')

  const sendCred= async (props)=>{

    try {
      await axios.post("http://10.0.2.2:5000/login" , {
      "username" : username,
      "password" : password
    
    })
    // console.log(resp.data)
    
    .then(async (resp) => {
      console.log(resp.data)
      try {
          await AsyncStorage.setItem('token', resp.data.token)
         
                  props.navigation.replace("Home")
          } catch (e) {
              console.log("error :",e)
          }
    })
    } catch (error) {
        console.log("error is : " + error)
    }
    

    //  fetch("http://10.0.2.2:5000/login",{
    //    method:"POST",
    //    headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body:JSON.stringify({
    //     "username" : username,
    //     "password":password
    //   })
    //  })
    //  .then(res=>res.json())
    //  .then(async (data)=>{
    //         try {
    //           await AsyncStorage.setItem('token',data.token)
    //           props.navigation.replace("Home")
    //         } catch (e) {
    //           console.log("error ishak:",e)
    //         }
    //  })
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
        style={{marginLeft:18,marginRight:18,marginTop:18}}
        theme={{colors:{primary:"blue"}}}
        onChangeText={(text)=>(setUsername(text))}
      />
      <TextInput
        label='password'
        mode="outlined"
        secureTextEntry={true}
        value={password}
        style={{marginLeft:18,marginRight:18,marginTop:18}}
        theme={{colors:{primary:"blue"}}}
        onChangeText={(text) => setPassword(text)}
      />
      <Button 
        mode="contained"
        style={{marginLeft:18,marginRight:18,marginTop:18}}
        onPress={() => sendCred(props)}
       >
        Login
      </Button>
      <TouchableOpacity>
        <Text
      style={{
        fontSize:18,marginLeft:18,marginTop:20
      }}
      onPress ={() => props.navigation.navigate("Signup")} 
      >dont have an account ?</Text>
      </TouchableOpacity>
      
      </KeyboardAvoidingView>
   </>
  );
};

// const styles = StyleSheet.create({
//   container : {
//     flex : 1,
//   },
// });


export default Signin;