import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableHighlight
} from 'react-native';
export default class Login extends Component<Props> {
  constructor(props) {
    super(props);
    logo = require('../../../images/pikachu.png');
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source = {logo} style={styles.logo}/>
        </View>
        <View Style = {styles.inputFrom}>
          <Text>REGISTER</Text>
          <TextInput style={styles.input} placeholder="Type here to translate!"/>
          <TextInput 
            style={styles.input}
            placeholderTextColor={"#FFF"}
            secureTextEntry ={true}
            placeholder="Type here to translate!"
          />
          <TouchableHighlight style={styles.loginButton}>  
            <Text>LOGIN</Text>
          </TouchableHighlight >  
        </View>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF', 
  },
  logo: {
    width: 220,
    resizeMode: 'contain'
  },
  inputFrom : {
    width: 220
  },
  input : {
    fontSize: 12,
    width: 220,
    backgroundColor: 'rgba(0,0,0,0.3)',
    color: '#FFF'
  },
  loginButton : { 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10
  }
});
