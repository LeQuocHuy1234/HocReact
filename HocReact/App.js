/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);  
    this.state = {
      myInteger: 0
    };
  }
  getCong() {
    this.setState((previousState)=>{ // previousState chứa tham số của state
      return {
        myInteger: previousState.myInteger +1
      }
    });
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={ styles.center }>{ this.state.myInteger }</Text>
        <Button title="Công" onPress = {this.getCong.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  }
});
