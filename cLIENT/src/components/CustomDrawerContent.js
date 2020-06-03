import React , { Component  , useState , useEffect} from 'react'
import { View, Text  , SafeAreaView , Image , TouchableOpacity , ScrollView , Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'

function CustomDrawerContent ({navigation}) {

  const [username , setUsername] = useState('')

    const ComponentDidMount = async ()=>{
      try {
       
        const token = await AsyncStorage.getItem('token')

        console.log('token drawer : ' , token)
        
      await axios.get('http://192.168.1.105:5000/profil',{
         headers:{
           'Authorization' : token
           }
         })
         .then(resp =>{
             setUsername(resp.data.username)
         })
         .catch(err => {
           console.log('erreur axios profile: '+err)
         })
      } catch (error) {
        console.log(' catch finale home '+ error)
      }
       
     
     };
     
     useEffect(()=>{ ComponentDidMount() },[]);

      const logout = async ()=>{ 
      
      await  AsyncStorage.removeItem('token')
          .then( ()=>{
          
            navigation.navigate('Login')
          })
          .catch(err => {
            console.log( err)
          })
      };

        return(
            <SafeAreaView style={{flex : 1 }}>
              <View style={{height : 150 , alignItems : 'center' , justifyContent : 'center'}}>
                <Image 
                  source={require('../assets/images/user.png')} 
                  style = {{ height : 120 , width : 120 , borderRadius : 60 }}
                />
                <Text> User : {username}</Text>
              </View>
                <ScrollView style={{marginLeft : 5}}>
                  <TouchableOpacity 
                    style={{ marginTop : 20 }}
                    onPress = {() => navigation.navigate('MenuTab')  } >
                      <Text>Menu Tab</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={{ marginTop : 20 }}
                    onPress = {() => navigation.navigate('Notifications')  } >
                      <Text>Notifications</Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                    style={{ marginTop : 20 }}
                    onPress = {() => navigation.navigate('HomeScreen')  } >
                      <Text>Home</Text>
                  </TouchableOpacity>
                </ScrollView>

                <TouchableOpacity 
                    style={{ marginTop : 20  ,marginLeft : 5}}
                    onPress = {() => logout()  } >
                      <Text>Logout</Text>
                  </TouchableOpacity>
            </SafeAreaView>
        );
}

export default  CustomDrawerContent ;
  