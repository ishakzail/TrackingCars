import React from 'react';
import { View , Text ,StyleSheet , TouchableOpacity, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { FlatList } from 'react-native-gesture-handler';
import { cos } from 'react-native-reanimated';
import { ActivityIndicator } from 'react-native-paper';


class ListOfPuce extends React.Component{

    constructor(){
        super()
        this.state = {
            PuceData : [],
            isLoading : true
        }
    }

    deletePuce  = async puce =>{
        try {
            const token = await AsyncStorage.getItem('token')
            const decoded = jwt_decode(token)

            console.log(decoded)

            const userId = decoded._id
           //  const puceId = 

           await axios.delete(`http://10.0.2.2:5000/${userId}/deletePuce/${puce}`)
           .then (res =>{
             console.log('res : ' + res.data)
           })


           .catch(err =>{ console.log('error deletePuce :' + err) })

        } catch (error) {
            
        }
    };

   


    renderPuce = ({ item  }) => {
        return(
            
        <TouchableOpacity
        onPress = {() => ToastAndroid.show(item.Name , ToastAndroid.SHORT)}
        > 
            <Text>
                {item._id}
            </Text>
            <Text>
                {item.Name}
            </Text>
            <Text>
                {item.legend}
            </Text>
            <Icon 
            name="remove" 
            size={20} 
            color="firebrick" 
            onPress = { () => this.deletePuce(item._id) }
            />
        </TouchableOpacity>
        )
    };

    

    renderSeparator = () =>{
        return(
            <View
                style = {{ 
                    height : 1 ,
                    width : '100%',
                    backgroundColor : 'black'
                 }}
            >

            </View>
        )
    }

    componentDidMount = async () =>{

        try {
            const token = await AsyncStorage.getItem('token')
            const decoded = jwt_decode(token)
            const userId = decoded._id
            
            
            

            await axios.get(`http://10.0.2.2:5000/${userId}/Getpuces`)
            .then((resp) => {
                //console.log(resp.data)
                this.setState({ 
                    PuceData : resp.data,
                    isLoading : false
                })

                console.log(resp.data)
                
            })
            
            .catch(err => {
                console.log('error axios :' + err)
            })
            
        } catch (error) {
            console.log('errro ' + error)
        }
        
    }

    

    

   render(){
    return (
        this.state.isLoading
            ?
            <View style={{ flex : 1 ,justifyContent : 'center' , alignItems : 'center' }} >
                <ActivityIndicator
                size = "large"
                color = "#330066"
                animating 
                />
            </View>
            
            :
        <View style={styles.container}>
           <FlatList
            data = {this.state.PuceData}
            renderItem = {this.renderPuce}
            keyExtractor = {(item , index )=> index.toString()}
            ItemSeparatorComponent = {this.renderSeparator}
           />
       </View>
        
          
  )
   }
  
};


const styles = StyleSheet.create({
    constainer : {
            flex : 1
    },
    listItem :{
        padding : 15,
        backgroundColor : '#f8f8f8',
        borderBottomWidth : 1,
        borderColor : '#eee',
    },
    listItemView :{
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    listItemText :{
        fontSize : 18,
        fontFamily :'firaCode'
    }
    
});



    



export default ListOfPuce;