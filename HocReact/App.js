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
export default class App extends Component<Props> {

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 2/3}}>
          <Image
            style={{ flex: 1, width: null, height: null}}
            resizeMode = {'stretch'} 
            source = { require('./images/toc-dep-5.png') }
            onLoadEnd={() => {
              alert('Load xong');
            }}
            onError={()=>{
              alert('Loi load hinh');
            }}
          />
        </View>
      </View>  
    );
  }
}

