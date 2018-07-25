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
  Button,
  Image
} from 'react-native';
import Login from './src/component/login/Login.js';
export default class App extends Component<Props> {

  render() {
    return (
      <Login /> 
    );
  }
}

