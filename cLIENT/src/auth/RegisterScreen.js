import React , { Component  , useState , useEffect} from 'react'
import { View, Text  , SafeAreaView  ,  Image , 
  TouchableOpacity ,  ScrollView ,  KeyboardAvoidingView , StatusBar} from 'react-native';
import CustomHeader from '../components/CustomHeader'
import {Button , TextInput   } from 'react-native-paper'
import axios from 'axios'


export default function RegisterScreen (props) {

            const [password , setPassword] = useState('');
            const [confirmPassword , setConfirmPassword] = useState('');
            const [username, setUsername] = useState('');
            const [email,setEmail] = useState('');
            const [lastName, setLastName] = useState('');
            const [firstName, setFirstName] = useState('');
          
              // const [ dataUser , setDataUser ] = useState('');
          
            const sendCred= async (props)=>{

              
              try {
                await axios.post(`http://192.168.1.110:5000/register`, {
                "email":email,
                "password":password,
                "confirmPassword" : confirmPassword,
                "firstName" : firstName ,
                "lastName" : lastName ,
                "username" : username 
                })
                .then(async (resp) => {
                  try {
                    
                    console.log('resp' , resp.data)
                      await props.navigation.navigate("Login")
                    } catch (error) {
                      
                    }
                })
                .catch(err =>{
                  console.log("err in sendCred :" ,err)
                })

              } catch (error) {
                console.log('generale error in registerScreen SendCred :', error)
              }
              
              //  console.log('VerifToken :'+response.data)
          
                
          
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
             
               <StatusBar backgroundColor="green" barStyle="light-content" />
            
                 
                        <Text
                        style={{
                        fontSize:20,marginLeft:18,marginTop:20 , color : 'green'
                        }}
                        
                        >Create your Account</Text>
                         <View
                          style={{
                            borderBottomColor:"green",
                            borderBottomWidth:4,
                            borderRadius:20,
                            marginLeft:18,
                            marginRight:18,
                            
                          }}
                          />


                        
                        
                          <ScrollView>
                          
                          <TextInput
                          label='Email'
                          mode="outlined"
                          value={email}
                          style={{marginLeft:15,marginRight:15,marginTop:15}}
                          theme={{colors:{primary:"green"}}}
                          onChangeText ={(text) => setEmail(text)}
                      
                          />
                          <TextInput
                          label='UserName'
                          mode="outlined"
                          value={username}
                          style={{marginLeft:15,marginRight:15,marginTop:15}}
                          theme={{colors:{primary:"green"}}}
                          onChangeText ={(text) => setUsername(text)}
                      
                          />
                          <TextInput
                          label='Last Name'
                          mode="outlined"
                          value={lastName}
                          style={{marginLeft:15,marginRight:15,marginTop:15}}
                          theme={{colors:{primary:"green"}}}
                          onChangeText ={(text) => setLastName(text)}
                      
                          />
                          <TextInput
                          label='First Name'
                          mode="outlined"
                          value={firstName}
                          style={{marginLeft:15,marginRight:15,marginTop:15}}
                          theme={{colors:{primary:"green"}}}
                          onChangeText ={(text) => setFirstName(text)}
                      
                          />
                          <TextInput
                          label='password'
                          mode="outlined"
                          secureTextEntry={true}
                          value = {password}
                          onChangeText = {(text) => setPassword(text)}
                          style={{marginLeft:15,marginRight:15,marginTop:15}}
                          theme={{colors:{primary:"green"}}}
                          />
                          <TextInput
                          label='re-type password'
                          mode="outlined"
                          secureTextEntry={true}
                          value = {confirmPassword}
                          onChangeText = {(text) => setConfirmPassword(text)}
                          style={{marginLeft:15,marginRight:15,marginTop:15}}
                          theme={{colors:{primary:"green"}}}
                          />
                          
                          </ScrollView>
                       
                        <Button 
                        mode="contained"
                        style={{marginLeft:15,marginRight:15,marginTop:15, backgroundColor : 'green' , borderRadius : 20}}
                            onPress={() => sendCred(props)}>
                        signup
                        </Button>
                        <TouchableOpacity>
                        <Text
                        style={{
                        fontSize:18,marginLeft:18,marginTop:20
                        }}
                        onPress ={() => props.navigation.navigate("Login")} 
                        >already have a account ?</Text>
                        </TouchableOpacity>
                 
                
                        
              </KeyboardAvoidingView>
              
             </>
        );
        
    
}