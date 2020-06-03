import React , {Component } from 'react'
import { View, Text  , SafeAreaView , Image , TouchableOpacity , ScrollView , Button} from 'react-native';
import {CustomHeader} from '../../components/index'


export class SettingsScreen extends Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <CustomHeader title ="Settings" isHome={true} navigation = {this.props.navigation} />
              <View style={{  flex : 1 , justifyContent : 'center' , alignItems : 'center' }}>
                <Text> Setting ! </Text>
                <TouchableOpacity 
                style={{ marginTop : 20 }} 
                onPress = {() => this.props.navigation.navigate('SettingDetail')  }>
                    <Text> Go Setting details </Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          );
    }
}