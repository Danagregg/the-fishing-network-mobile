/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  SegmentedControlIOS,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import PropTypes from 'react';
var Button = require('react-native-button');

import SegmentControl from '../TheFishingNetwork/SegmentControl';

class TheFishingNetwork extends Component {

  buttonClicked(event) {
    console.log('buttonClicked');
  }
  render() {
    return (
      <View>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarButton}></Text>
          <Text style={styles.toolbarTitle}>The Fishing Network</Text>
          <Button onPress={this.buttonClicked}>
            <Text style={styles.toolbarButton}>Export</Text>
          </Button>
        </View>
        <View style = {{marginBottom: 10}}>
          <ButtonControl />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor:'#81c04d',
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row'
  },
  toolbarButton:{
    width: 50,
    color:'#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize:14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
  toolbarTitle:{
    color:'#fff',
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    flex:1
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TheFishingNetwork', () => TheFishingNetwork);
