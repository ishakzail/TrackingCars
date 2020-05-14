import React , {useState} from 'react';
import { 
    View , 
    Text ,
    TouchableOpacity,
    StatusBar,
    KeyboardAvoidingView
} from 'react-native';
import { Button ,TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


const AddPuce = async (props) => {

    // // const [text , setText] = useState('');
    // // const onChange = (textValue) => setText(textValue);

    // const [latitude , setLatitude] = useState('')
    // const [longitude ,setLongitude] = useState('')
    // const [legend , setLegend] = useState('')
    // const [Name , setName] = useState('')

    // const dataPuce = async (props) =>{

    //     try { 
    //         await axios.post('http://10.0.2.2:5000/Newpuces' ,{
    //             "latitdue" : latitude,
    //             "longitude" : longitude,
    //             "legend" : legend,
    //             "Name" : Name
                
    //         })
    //         .then(async (res) => {
    //             //console.log(res)
    //         })

    //     } catch (error) {
    //         console.log("error is : " + error)
    //     }
    // }
  return (
    <KeyboardAvoidingView behavior="position">
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <Text 
      style={{fontSize:30,marginLeft:18,color:"blue"}}
      >Add a new puce</Text>
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
        <TextInput
            label='Name'
            mode="outlined"
            value={Name}
            style={{marginLeft:18,marginRight:18,marginTop:18}}
            theme={{colors:{primary:"blue"}}}
            onChangeText={(text) => setName(text)}
        />
        <TextInput
            label='latitude'
            mode="outlined"
            value={latitude}
            style={{marginLeft:18,marginRight:18,marginTop:18}}
            theme={{colors:{primary:"blue"}}}
            onChangeText={(text) => setLatitude(text)}
        />
        <TextInput
            label='longitude'
            mode="outlined"
            value={longitude}
            style={{marginLeft:18,marginRight:18,marginTop:18}}
            theme={{colors:{primary:"blue"}}}
            onChangeText={(text) => setLongitude(text)}
        />
        <TextInput
            label='legend'
            mode="outlined"
            value={legend}
            style={{marginLeft:18,marginRight:18,marginTop:18}}
            theme={{colors:{primary:"blue"}}}
            onChangeText={(text) => setLegend(text)}
        />
        <Button 
            mode="contained"
            style={{marginLeft:18,marginRight:18,marginTop:18}}
            onPress={() => dataPuce(props)}
        >
            Add
        </Button>
            
    </KeyboardAvoidingView>
  ) 
};


// const styles = StyleSheet.create({
//  btn : {
//         backgroundColor : '#c2bad8',
//         padding: 9,
//         margin : 5,
//         textAlign : 'center'
//     },
//  btnText : {
//         color : 'darkslateblue' ,
//         fontSize : 20 ,
//         textAlign : 'center',
//     }
// });



export default AddPuce;