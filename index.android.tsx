
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import AppContainer from './src'

class App extends Component<{}, {}> {
  render() {
    return (<AppContainer />)
  }
}
AppRegistry.registerComponent('rntypescript', () => App);