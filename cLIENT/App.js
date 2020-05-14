import React , {useEffect, useState } from 'react';
import { View , Text ,StyleSheet , FlatList , Alert } from 'react-native';

import Signin from './components/authComponents/Signin'
import Signup from './components/authComponents/Signup'
import Loading from './components/authComponents/Loading'
import Home from './components/authComponents/Home'

import ListOfPuce from './components/puceScreens/ListOfPuces'
import AddPuce from './components/puceScreens/AddPuce'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
const Stack = createStackNavigator();
const App = ({navigation}) => {

  const [isloggedin,setLogged] = useState(null)

  const detectLogin= async ()=>{
        const token = await AsyncStorage.getItem('token')
        if(token){
            setLogged(true)
        }else{
            setLogged(false)
        }
  }
  useEffect(()=>{ detectLogin() },[]);

  return (
    <NavigationContainer>
    <Stack.Navigator >
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Home" component={Home} /> 
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />

          <Stack.Screen name="AddPuce" component={AddPuce}></Stack.Screen>
          <Stack.Screen name="ListOfPuce" component={ListOfPuce}></Stack.Screen>
    </Stack.Navigator>
          
  </NavigationContainer>
   
  );
};
const styles= StyleSheet.create({
  loading:{
   flex:1,
  justifyContent:"center",
  alignItems:"center" 
  }
  
})



export default App;