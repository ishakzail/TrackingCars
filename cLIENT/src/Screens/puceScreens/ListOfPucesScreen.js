import React from 'react';
import { View , Text ,StyleSheet , TouchableOpacity, ToastAndroid, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { cos } from 'react-native-reanimated';
import { ActivityIndicator } from 'react-native-paper';
import CustomHeader from '../../components/CustomHeader'
import { Left } from 'native-base';

class ListOfPuce extends React.Component{

    constructor(){
        super()
        this.state = {
            PuceData : [],
            isLoading : true
        }
    }

    deletePuce  = async (puce) =>{
        try {
            const token = await AsyncStorage.getItem('token')
            const decoded = jwt_decode(token)

            console.log(decoded)

            const userId = decoded._id
           //  const puceId = 

           await axios.delete(`http://192.168.1.105:5000/${userId}/deletePuce/${puce}`)
           .then (res =>{
             console.log('res : ' + res.data)
             this.setState({ 
                PuceData : resp.data,
                isLoading : false
            })

           })


           .catch(err =>{ console.log('error deletePuce :' + err) })

        } catch (error) {
            
        }
    };

    updatePuce =async  (id) =>{
        console.log('id :' , id)
      await  this.props.navigation.navigate('EditPuce' , {id : id}) 
    }



    renderPuce = ({item} ) => {
       return(     
        <TouchableOpacity
        onPress = {() => ToastAndroid.show(item.Name , ToastAndroid.SHORT)}
        > 
            <View styles={styles.listItemView} >   
                <Text style={styles.listItemText}>
                    Name : {item.Name}
                    
                </Text>
                <Text style={styles.listItemText}>
                    Legend : {item.legend}
                </Text>
                <Text style={styles.listItemText}>
                    Created at : {(item.createdAt).toString()}
                </Text>
                {/* <Icon 
                    name="remove" 
                    size={20} 
                    color="firebrick" 
                    
                    onPress = { () => this.deletePuce(item._id) }
                /> */}
                <Icon 
                    name="edit" 
                    size={20} 
                    color="green" 
                    
                    onPress = { () => this.updatePuce(item._id)}
                />
    
          
            </View>
        </TouchableOpacity>
        )
    };

    

    renderSeparator = () =>{
        return(
            <View
                style = {{ 
                    height : 1.5 ,
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
            
            
            

            await axios.get(`http://192.168.1.105:5000/${userId}/Getpuces`)
            .then((resp) => {
                //console.log(resp.data)
                this.setState({ 
                    PuceData : resp.data,
                    isLoading : false
                })

                 // console.log(resp.data)
                
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
            
            <SafeAreaView style={{ flex : 1 ,justifyContent : 'center' , alignItems : 'center' }} >
             
                <ActivityIndicator
                size = "large"
                color = "#330066"
                animating 
                />
            </SafeAreaView>
            
            :
        
        <SafeAreaView style={styles.container}>
         <CustomHeader title ="Puce List" isHome={true} navigation ={this.props.navigation} />
            
                <FlatList
                    data = {this.state.PuceData}
                    renderItem = {this.renderPuce}
                    keyExtractor = {(item , index )=> index.toString()}
                    ItemSeparatorComponent = {this.renderSeparator}
                />
             
           
       </SafeAreaView>
          
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
    },
    icon : {
        textAlign : 'right',
        marginLeft : 45
    }
    
});



    



export default ListOfPuce;