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
  _onPress(event) {
    alert(event.nativeEvent);
  }

  _onLongPress(event) {
    alert('Long click');
  }
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text onLongPress = { this._onLongPress.bind(this) } onPress = {this._onPress.bind(this)} ellipsizeMode = {'tail'} numberOfLines = {1} selectable = { true }>Thà để ta phụ người khác chứ không để người khác phụ ta.Thà để ta phụ người khác chứ không để người khác phụ ta.</Text>
      </View>  
    );
  }
}

