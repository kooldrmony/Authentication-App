import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './src/components/common';
import LoginForm from "./src/components/LoginForm";



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: null
    }


  }
  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyDtMB8iQWk1t_yBurOzxnXhvgqCCZU_g7M",
    authDomain: "authentication-85da2.firebaseapp.com",
    databaseURL: "https://authentication-85da2.firebaseio.com",
    projectId: "authentication-85da2",
    storageBucket: "authentication-85da2.appspot.com",
    messagingSenderId: "669166679027"
  });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {

      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );

      case false:
        return <LoginForm />;

      default: 
        return <Spinner size='large' />;

    }
    
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  };
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
