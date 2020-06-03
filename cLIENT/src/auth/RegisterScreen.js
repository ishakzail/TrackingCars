import React , { Component  , useState , useEffect} from 'react'
import { View, Text  , SafeAreaView  ,  Image , TouchableOpacity , ScrollView ,  KeyboardAvoidingView , StatusBar} from 'react-native';
import CustomHeader from '../components/CustomHeader'
import {Button , TextInput } from 'react-native-paper'

export default function RegisterScreen ({navigation}) {

            const [password , setPassword] = useState('');
            const [confirmPassword , setConfirmPassword] = useState('');
            const [username, setUsername] = useState('');
            const [email,setEmail] = useState('');
            const [lastName, setLastName] = useState('');
            const [firstName, setFirstName] = useState('');
          
              // const [ dataUser , setDataUser ] = useState('');
          
            const sendCred= async ()=>{
              const response = await axios.post('http://192.168.1.105:5000/register', {
                "email":email,
                "password":password,
                "confirmPassword" : confirmPassword,
                "firstName" : firstName ,
                "lastName" : lastName ,
                "username" : username ,
          
              })
                // const res = await fetch("http://localhost:5000/register/",{
          
                // method:"POST",
                // headers: {
                //   'Content-Type': 'application/json'
                //           },
                // body: JSON.stringify({
                //   "email":email,
                //   "password":password,
                //   "confirmPassword" : confirmPassword,
                //   "firstName" : firstName ,
                //   "lastName" : lastName ,
                //   "username" : username ,
          
                // })
              //})
              .then( () => {
                try {
                    navigation.navigate("Login")
                  } catch (error) {
                    
                  }
              });
               console.log('VerifToken :'+response.data)
          
                
          
               //props.navigation.replace("Confir")
              
              
              
               
            
              //  .then(res=>res.json())
              //  .then(async (data)=>{
              //         try {
              //          //await AsyncStorage.setItem('token',data.token); 
              //          props.navigation.replace("ConfirmEmail")
              //         } catch (e) {
              //           console.log("error",e)
              //         }
              //  });
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
                 <ScrollView>
                        <Text
                        style={{
                        fontSize:20,marginLeft:18,marginTop:20
                        }}
                        
                        >create new account</Text>
                        <TextInput
                        label='Email'
                        mode="outlined"
                        value={email}
                        style={{marginLeft:18,marginRight:18,marginTop:18}}
                        theme={{colors:{primary:"blue"}}}
                        onChangeText ={(text) => setEmail(text)}
                    
                        />
                        <TextInput
                        label='UserName'
                        mode="outlined"
                        value={username}
                        style={{marginLeft:18,marginRight:18,marginTop:18}}
                        theme={{colors:{primary:"blue"}}}
                        onChangeText ={(text) => setUsername(text)}
                    
                        />
                        <TextInput
                        label='Last Name'
                        mode="outlined"
                        value={lastName}
                        style={{marginLeft:18,marginRight:18,marginTop:18}}
                        theme={{colors:{primary:"blue"}}}
                        onChangeText ={(text) => setLastName(text)}
                    
                        />
                        <TextInput
                        label='First Name'
                        mode="outlined"
                        value={firstName}
                        style={{marginLeft:18,marginRight:18,marginTop:18}}
                        theme={{colors:{primary:"blue"}}}
                        onChangeText ={(text) => setFirstName(text)}
                    
                        />
                        <TextInput
                        label='password'
                        mode="outlined"
                        secureTextEntry={true}
                        value = {password}
                        onChangeText = {(text) => setPassword(text)}
                        style={{marginLeft:18,marginRight:18,marginTop:18}}
                        theme={{colors:{primary:"blue"}}}
                        />
                        <TextInput
                        label='re-type password'
                        mode="outlined"
                        secureTextEntry={true}
                        value = {confirmPassword}
                        onChangeText = {(text) => setConfirmPassword(text)}
                        style={{marginLeft:18,marginRight:18,marginTop:18}}
                        theme={{colors:{primary:"blue"}}}
                        />
                        
                        <Button 
                        mode="contained"
                        style={{marginLeft:18,marginRight:18,marginTop:18}}
                            onPress={() => sendCred()}>
                        signup
                        </Button>
                        <TouchableOpacity>
                        <Text
                        style={{
                        fontSize:18,marginLeft:18,marginTop:20
                        }}
                        onPress ={() => navigation.navigate("Login")} 
                        >already have a account ?</Text>
                        </TouchableOpacity>
                 </ScrollView>
                
                
              </KeyboardAvoidingView>
              
             </>
        );
        
    
}