import React , { Component } from 'react'
import { View, Text  , SafeAreaView , Image , TouchableOpacity , ScrollView , Button} from 'react-native';
import {CustomHeader} from '../../components/index'


export class SettingsScreenDetail extends Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <CustomHeader title ="Settings" navigation={this.props.navigation} />
              <View style={{  flex : 1 , justifyContent : 'center' , alignItems : 'center' }}>
                <Text> Setting Detail ! </Text>
                <TouchableOpacity style={{ marginTop : 20 }} >
                    <Text> Go Setting details </Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
        );
    }
}