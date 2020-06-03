import React , { Component } from 'react'
import { View, Text  , SafeAreaView , Image , TouchableOpacity , ScrollView , Button} from 'react-native';
import CustomHeader from '../components/CustomHeader'


export default function NotificationScreen ({navigation}) {

    
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title ="Notifications" navigation={navigation} />
                <View style={{  flex : 1 , justifyContent : 'center' , alignItems : 'center' }}>
                    <Text> Notifications </Text>
                </View>
            </SafeAreaView>
          );
    
}