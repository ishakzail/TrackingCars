import React, { Component , useEffect, useState } from "react";
import { StyleSheet, View, Text, Switch, Image, StatusBar } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import HeaderX from "../../components/HeaderX";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const Profile = (props) => {

    const [username , setUsername] = useState('')

    const ComponentDidMount = async ()=>{
        try {
         
         const token = await AsyncStorage.getItem('token')
   
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


  return (
    <View style={styles.root}>
    <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
    <HeaderX icon2Name="power" style={styles.headerX}></HeaderX>
    <View style={styles.body}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 859.43 890.3" style={styles.ellipse}>
          <Ellipse
            strokeWidth={1}
            fill="rgba(255,255,255,1)"
            cx={430}
            cy={445}
            rx={429}
            ry={445}
          ></Ellipse>
        </Svg>
        <View style={styles.settingsList}>
          <View style={styles.accountSettings}>
            <Text style={styles.expanded}>Account Settings</Text>
            <View style={styles.subSettings}>
              <View style={styles.editProfileColumn}>
                <View style={styles.editProfile}>
                  <Text style={styles.text10}>Edit Profile</Text>
                  <View style={styles.text10Filler}></View>
                  <IoniconsIcon
                    name="ios-arrow-forward"
                    style={styles.icon}
                  ></IoniconsIcon>
                </View>
                <View style={styles.changeConnections}>
                  <Text style={styles.text11}>Change connections</Text>
                  <View style={styles.text11Filler}></View>
                  <IoniconsIcon
                    name="ios-arrow-forward"
                    style={styles.icon2}
                  ></IoniconsIcon>
                </View>
              </View>
              <View style={styles.editProfileColumnFiller}></View>
              <View style={styles.providerSettings}>
                <Text style={styles.text12}>Edit provider settings</Text>
                <View style={styles.text12Filler}></View>
                <IoniconsIcon
                  name="ios-arrow-forward"
                  style={styles.icon3}
                ></IoniconsIcon>
              </View>
            </View>
          </View>
          <View style={styles.sub2}>
            <View style={styles.notificationsColumn}>
              <View style={styles.notifications}>
                <Text style={styles.text7}>Notifications</Text>
                <View style={styles.text7Filler}></View>
                <Switch
                  value={true}
                  trackColor={{ true: "rgba(230, 230, 230,1)" }}
                  thumbColor="rgba(31,178,204,1)"
                  style={styles.switch3}
                ></Switch>
              </View>
              <View style={styles.backup}>
                <Text style={styles.text72}>Backup</Text>
                <View style={styles.text72Filler}></View>
                <Switch
                  value={false}
                  trackColor={{
                    true: "#1fb2cc",
                    false: "rgba(230, 230, 230,1)"
                  }}
                  style={styles.switch2}
                ></Switch>
              </View>
            </View>
            <View style={styles.notificationsColumnFiller}></View>
            <View style={styles.sponsored}>
              <Text style={styles.text73}>Sponsored Messages</Text>
              <View style={styles.text73Filler}></View>
              <Switch
                value={false}
                trackColor={{
                  true: "rgba(230, 230, 230,1)",
                  false: "rgba(230, 230, 230,1)"
                }}
                style={styles.switch4}
              ></Switch>
            </View>
          </View>
        </View>
        <Text style={styles.pageName}>SETTINGS</Text>
        <View style={styles.userInfo}>
          <View style={styles.avatarRow}>
            <Image
              source={require("../../assets/images/actor-adult-black-and-white-1040880.jpg")}
              resizeMode="stretch"
              style={styles.avatar}
            ></Image>
            <View style={styles.userEmailStack}>
              <Text style={styles.userEmail}>stan@stansmith.com</Text>
              <Text style={styles.userName}>{username}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1fb2cc",
    width: 360,
    height: 660
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 859,
    height: 890,
    position: "absolute"
  },
  settingsList: {
    left: 51,
    height: 409,
    position: "absolute",
    right: 450,
    bottom: 272
  },
  accountSettings: {
    height: 165,
    marginTop: 15,
    marginLeft: 24,
    marginRight: 24
  },
  expanded: {
    color: "#121212",
    fontSize: 18,
    marginTop: -3
  },
  subSettings: {
    height: 118,
    marginTop: 33
  },
  editProfile: {
    height: 30
  },
  text10: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    marginTop: 6
  },
  icon: {
    color: "rgba(31,178,204,1)",
    fontSize: 30,
    alignSelf: "flex-end",
    marginTop: -6
  },
  changeConnections: {
    height: 30,
    marginTop: 11
  },
  text11: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    marginTop: 6
  },
  icon2: {
    color: "rgba(31,178,204,1)",
    fontSize: 30,
    alignSelf: "flex-end",
    marginTop: -6
  },
  editProfileColumn: {
    marginLeft: 10,
    marginRight: 10
  },
  editProfileColumnFiller: {
    flex: 1
  },
  providerSettings: {
    height: 30,
    marginLeft: 10,
    marginRight: 10
  },
  text12: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    marginTop: 6
  },
  icon3: {
    color: "#1fb2cc",
    fontSize: 30,
    alignSelf: "flex-end",
    marginTop: -6
  },
  sub2: {
    height: 186,
    marginTop: 18,
    marginLeft: 29,
    marginRight: 29
  },
  notifications: {
    height: 27,
    alignSelf: "center"
  },
  switch3: {
    width: 38,
    alignSelf: "flex-end"
  },
  text7: {
    color: "#121212",
    fontSize: 18
  },
  backup: {
    height: 27,
    alignSelf: "center",
    marginTop: 53
  },
  switch2: {
    width: 40,
    alignSelf: "flex-end",
    marginRight: -2
  },
  text72: {
    color: "#121212",
    fontSize: 18
  },
  notificationsColumn: {},
  notificationsColumnFiller: {
    flex: 1
  },
  sponsored: {
    height: 27,
    alignSelf: "center"
  },
  switch4: {
    width: 37,
    alignSelf: "flex-end"
  },
  text73: {
    color: "#121212",
    fontSize: 18
  },
  userInfo: {
    top: 55,
    left: 87,
    height: 125,
    position: "absolute",
    right: 451,
    flexDirection: "row"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  userEmail: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    marginLeft: 62,
    marginTop: 88
  },
  userName: {
    color: "#1fb2cc",
    fontSize: 30,
    marginTop: -10
  },
  avatarRow: {
    height: 100,
    flexDirection: "row",
    flex: 1,
    marginRight: 159
  },
  ellipseStack: {
    height: 890,
    marginTop: 43,
    marginLeft: -50,
    marginRight: -449
  },
  pageName: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: -899,
    marginLeft: 35
  }
});

export default Profile;