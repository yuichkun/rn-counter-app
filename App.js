/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Modal} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    count: 0,
    modalVisible: false,
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Counter App</Text>
        <View>
          <Text>{this.state.count}</Text>
          <Button title="Add" onPress={this.incCounter.bind(this)}/>
          <Button title="Subtract" onPress={this.decCounter.bind(this)}/>
          <Button title="Reset" onPress={this.resetCounter.bind(this)}/>
        </View>
        { this.renderModal() }
      </View>
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { count, modalVisible } = this.state;
    const modalInvisible = modalVisible === false; 
    if ( isMultipleOfTen(this.state.count) && modalInvisible ) {
      if (prevState.modalVisible === false) {
        this.setState({
          modalVisible: true
        });
      }
    }
  }
  renderModal() {
    const { modalVisible, count } = this.state;
    return (
      <Modal visible={modalVisible}>
        <View style={styles.container}>
          <Text>Yay! You've reached {count}</Text>
          <Button title="Close" onPress={()=>{this.setState({modalVisible: false})}}/>
        </View>
      </Modal>
    );
  }
  incCounter() {
    this.setState(prevState =>  ({ count: prevState.count + 1 }));
  }
  decCounter() {
    this.setState(prevState =>  ({ count: prevState.count - 1 }));
  }
  resetCounter() {
    this.setState({ count: 0 });
  }
}

// Some Util
function isMultipleOfTen(num) {
  const isNotZero = num != 0;
  return num % 10 === 0 && isNotZero;
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
