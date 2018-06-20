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
  View
} from 'react-native';

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Greeting  name="huy"/>
        <Greeting />
      </View>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <View>
        <Text>Hello { this.props.name }</Text>
      </View>
    );
  }
}
//Tạo giá trị mặc định cho Layout Props

Greeting.defaultProps = {
  name: 'value'
}