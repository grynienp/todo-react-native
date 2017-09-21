import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Root } from "native-base";
import ListView from './src/ListView';
import Main from './src/Main';
var { Provider } = require('react-redux');

var configureStore = require('./src/store/configureStore');

export default class RootApp extends React.Component {
  state: {
    isLoading: boolean;
    store: any;
  };

  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: configureStore(() => {}),
    };
  }


  async componentDidMount() {
    await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({isLoading: false})
}

  render() {
    if (this.state.isLoading) {
      return null;
    }
    return (
      <Root>
        <Main />
      </Root>
      // <Provider store={this.state.store}>
      //   <Main />
      // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  mb10: {
    marginBottom: 10
  }
});