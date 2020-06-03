import React, { Component }  from 'react'
import { Button , TextInput } from 'react-native-paper'
import {
  Linking,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    KeyboardAvoidingView
  } from 'react-native';
  import AsyncStorage from '@react-native-community/async-storage';
  import axios from 'axios'


  const ConfirmEmail = (props) => {
    return (
      <>
      <View>
        <Text style={{fontSize:18}}>email is confirmed</Text>
      </View>
      
      </>  
    );
  }


  export default ConfirmEmail