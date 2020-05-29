import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Heading from './components/Heading'
import { Header } from 'react-native-elements';
import Image from './components/Image'
import { render } from 'react-dom';
import axios from 'axios'
import { createStackNavigator } from '@react-navigation/stack';
import Navigator from './routes/HomeStack'


const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});





export default function App() {
  
   const res = axios.get(`https://api.unsplash.com/photos/random?&query=cupcake&client_id=4_-191W_jUgFQg_ujNLY9H3gpr7zGA4yY8ffZXQoJO0`)
  .then((res) => {
    return res.json()
  })
  .then((resJson) => {
    console.log('resJson', resJson);
  })
  console.log(res);

  
 
  return (
    <>
    <Heading></Heading>
    <Navigator></Navigator>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
