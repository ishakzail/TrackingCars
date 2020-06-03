import React , { Component } from 'react'
import { View, Text  , SafeAreaView , Image , TouchableOpacity , ScrollView , Button} from 'react-native';
import CustomHeader from '../../components/CustomHeader'
export default function HomeScreenDetail ({navigation}) {

    
        return (
            <SafeAreaView style={{ flex: 1 }} >
            <CustomHeader title ="Home" navigation ={navigation} />
            <View style={{  flex : 1 , justifyContent : 'center' , alignItems : 'center' }}>
                <Text> Home Details! </Text>
            </View>
            </SafeAreaView>
        );
    
    
}