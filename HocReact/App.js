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
  TextInput,
  Button
} from 'react-native';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  
    this.state = {
      text:'',
    };
  }
  
  _onChangeText(text) {
    this.setState({
      text: text
    });
  }
  
  _onPress() {
    alert('Xin chào ' + this.state.text);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <TextInput
          onChangeText = {this._onChangeText.bind(this)}
          value = { this.state.text }
          placeholder = { "Vui lòng nhập họ tên" }
          // underlineColorAndroid = {'transparent'}
          windowSoftInputMode = {'adjustResize'}
        />
        <Text style={{color: 'green', alignItems:'center'}}>{ this.state.text }</Text>
        <Button
        title="Đồng ý"
        onPress = { this._onPress.bind(this) }
        />
      </View>  
    );
  }
}

