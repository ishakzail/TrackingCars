import React , { Component  , useEffect , useState} from 'react'

import { View, Text  , SafeAreaView , Image , TouchableOpacity , ScrollView , Button} from 'react-native';
import CustomHeader from '../../components/CustomHeader'
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';


export default function HomeScreen ({navigation}) {
  componentDidMount = async ()=>{
    try {
        const token = await AsyncStorage.getItem('token')
        console.log('token home :' , token)
        await axios.get('http://192.168.1.105:5000/profil',{
          headers:{
            'Authorization' : token
            }
          })
          .catch(err => {
            console.log('erreur axios home: '+err)
          })
        } catch (error) {
          console.log(' catch finale home '+ error)
        } 
   };
   
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <CustomHeader title ="Home" isHome={true} navigation ={navigation} />
              <View style={{  flex : 1 , justifyContent : 'center' , alignItems : 'center' }}>
                <Text> Home ! </Text>
                <TouchableOpacity 
                style={{ marginTop : 20 }}
                onPress = {() => navigation.navigate('HomeDetail')  } >
                    <Text> Go Home details </Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          );
    
}