import React , { Component  , useState , useEffect} from 'react'
import { View, Text  , SafeAreaView , Image , TouchableOpacity , ScrollView , Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'

function CustomDrawerContent (props) {

  const [username , setUsername] = useState('')

    const ComponentDidMount = async ()=>{
      try {
       
        const token = await AsyncStorage.getItem('token')

        console.log('token drawer : ' , token)
        
      await axios.get('http://192.168.1.110:5000/profil',{
         headers:{
           'Authorization' : token
           }
         })
         .then(resp =>{
             setUsername(resp.data.username)
         })
         .catch(err => {
           console.log('erreur axios drawer: '+err)
         })
      } catch (error) {
        console.log(' catch finale home '+ error)
      }
       
     
     };
     
     useEffect(()=>{ ComponentDidMount() },[]);

      const logout = async ()=>{ 
      
      await  AsyncStorage.removeItem('token')
          .then(async  (resp)=>{
            console.log('resp in drawer :' , resp)
           await props.navigation.navigate('Login')
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
                    onPress = {() => props.navigation.navigate('MenuTab')  } >
                      
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={{ marginTop : 20 }}
                    onPress = {() => props.navigation.navigate('ViewProfile' )  } >
                      <Text
                      style ={{marginLeft : 30}}
                      >View Profile</Text>
                      <Image
                      source = {require('../assets/images/user-Profile.png')}
                      style ={{width : 20 , height : 20 , resizeMode : 'contain'    ,position : 'absolute' }}
                      

                      />
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={{ marginTop : 20 }}
                    onPress = {() => props.navigation.navigate('EditProfile' )  } >
                      <Text
                      style ={{marginLeft : 30}}
                      >Edit Profile</Text>
                      <Image
                      source = {require('../assets/images/edit-profile.png')}
                      style ={{width : 20 , height : 20 , resizeMode : 'contain'    ,position : 'absolute' }}
                      

                      />
                  </TouchableOpacity>
                </ScrollView>

                <TouchableOpacity  
                    style={{ marginTop : 15 , marginBottom : 20,marginLeft : 5  }}
                    onPress = {() => logout()  } >
                      <Text
                        style ={{marginLeft : 30}}

                      >Logout </Text>

                      <Image
                      source = {require('../assets/images/logout.png')}
                      style ={{width : 20 , height : 20 , resizeMode : 'contain'  , marginBottom : 25 ,position : 'absolute' }}
                      

                      />

                          
                  </TouchableOpacity>
            </SafeAreaView>
        );
}

export default  CustomDrawerContent ;
  