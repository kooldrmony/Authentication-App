import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import LoginIn from "./src/components/LoginIn";
import Header from "./src/components/Header";


export default class App extends React.Component {
  componentWillMount() {
    firebase.intitializeApp({
    apiKey: "AIzaSyDtMB8iQWk1t_yBurOzxnXhvgqCCZU_g7M",
    authDomain: "authentication-85da2.firebaseapp.com",
    databaseURL: "https://authentication-85da2.firebaseio.com",
    projectId: "authentication-85da2",
    storageBucket: "authentication-85da2.appspot.com",
    messagingSenderId: "669166679027"
  });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <Text>Hello</Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
