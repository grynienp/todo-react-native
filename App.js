import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ListView from './src/ListView';
var { Provider } = require('react-redux');

var configureStore = require('./src/store/configureStore');

export default class Root extends React.Component {
  state: {
    isLoading: boolean;
    store: any;
  };

  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({isLoading: false})),
    };
  }
  render() {
    if (this.state.isLoading) {
      return null;
    }
    return (

      <Provider store={this.state.store}>
        <View style={styles.container}>
          <ListView />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: '#F8F8F8',
  }
});