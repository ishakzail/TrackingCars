
import * as React from 'react';
import { useState , useEffect } from 'react'
import { View, Text  , SafeAreaView , Image , TouchableOpacity , ScrollView , Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomHeader  } from './src/components'

import  CustomDrawerContent from './src/components/CustomDrawerContent'

import LoginScreen from './src/auth/LoginScreen'
import RegisterScreen  from './src/auth/RegisterScreen'
import HomeScreen from './src/Screens/userScreens/HomeScreen'
import HomeScreenDetail from './src/Screens/userScreens/HomeScreenDetail'
import { SettingsScreen , SettingsScreenDetail } from './src/Screens'
import EditProfile  from './src/drawer/EditProfile'
import ViewProfile from './src/Screens/userScreens/ProfileScreen'

import ListOfPucesScreen from './src/Screens/puceScreens/ListOfPucesScreen'
import AddPuceScreen from './src/Screens/puceScreens/AddPuceScreen'
import EditUsePuce from './src/Screens/puceScreens/EditUsePuce'
import TrackPucesScreen from './src/Screens/puceScreens/TrackPucesScreen'
import StatisticsScreen from './src/Screens/puceScreens/StatisticsScreen'



import socket from './src/components/SocketConn'

import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import jwt_decode from 'jwt-decode'




const Drawer = createDrawerNavigator();


function TabNavigator(){
    return (
      <Tab.Navigator 
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('././src/assets/images/home.png')
              : require('././src/assets/images/home-black.png');
          } else if (route.name === 'Cards List') {
            iconName = focused 
            ? require('././src/assets/images/list.png')
            : require('././src/assets/images/list-black.png');
          } else if (route.name === 'Add Card')
            iconName = focused
            ? require('././src/assets/images/add.png')
            : require('././src/assets/images/add-black.png')
          else if (route.name === 'Track Cards')
            iconName = focused
            ? require('./src/assets/images/map.png')
            : require('./src/assets/images/map-black.png')
            else if (route.name === 'Statistics')
            iconName = focused
            ? require('./src/assets/images/statistics.png')
            : require('./src/assets/images/statistics-black.png')
          

          return <Image 
                    source={iconName} 
                    style ={{width : 20 , height : 20 , resizeMode : 'contain'}}  />
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}
     >
     <Tab.Screen name="Home" component={HomeStack} />
     <Tab.Screen name="Add Card" component={AddPuceScreen} />
     <Tab.Screen name="Cards List" component={ListOfPuceStack} />
     <Tab.Screen name="Track Cards" component={TrackPucesScreen} />
     <Tab.Screen name="Statistics" component={StatisticsScreen} />
   </Tab.Navigator>
    )
}



const Tab = createBottomTabNavigator();
const navOptionHandler = () =>({
  headerShown : false
})


const StackHome = createStackNavigator();

function HomeStack(){
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component ={HomeScreen} options={navOptionHandler}/>
      <StackHome.Screen name="HomeDetail" component ={HomeScreenDetail}  options={navOptionHandler}/>
    </StackHome.Navigator>
  )
}

const StackPuces = createStackNavigator();

function ListOfPuceStack(){
  return (
    <StackPuces.Navigator initialRouteName="PucesList">
      <StackPuces.Screen name="PucesList" component ={ListOfPucesScreen} options={navOptionHandler}/>
      <StackPuces.Screen name="EditPuce" component ={EditUsePuce} options={navOptionHandler} /> 
    </StackPuces.Navigator>
  )
}

function DrawerNavigator({navigation}){
  return (
    <Drawer.Navigator 
      initialRouteName="MenuTab" 
      drawerContent={() => <CustomDrawerContent navigation={navigation}/> }>
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="EditProfile" component={EditProfile} />
        <Drawer.Screen name="ViewProfile" component={ViewProfile} />
    </Drawer.Navigator>
  )
}

const StackApp = createStackNavigator();

export default function App({navigation}) {

  
  socket.on('connect', async () => {

    const token = await AsyncStorage.getItem('token')
    const decoded = jwt_decode(token)

    //console.log(decoded)

    const userId = decoded._id

    console.log('app js is connected ')

    console.log('userId : ' , userId)

    // emit a join event for creating a user room's in backend 
    socket.emit('join' , userId)
  });




  

  const [isloggedin,setLogged] = useState(null)

  const detectLogin= async ()=>{
        const token = await AsyncStorage.getItem('token')
        
        if(token){
            setLogged(true)
        }else{
            setLogged(false)
        }
        console.log('isLogged in :' , isloggedin)
  }
  useEffect(
    ()=>{ detectLogin()} ,
    [isloggedin]);
    
  return (
    
    <NavigationContainer>
    
     <StackApp.Navigator >
      
        
        <StackApp.Screen name="HomeApp" component ={DrawerNavigator} options={navOptionHandler}/>
       
        <StackApp.Screen name="Login" component ={LoginScreen}  options={navOptionHandler}/>
        <StackApp.Screen name="Register" component = {RegisterScreen}  options={navOptionHandler}/>
       
        
      
        
    </StackApp.Navigator>
  
  </NavigationContainer>
  );
}
