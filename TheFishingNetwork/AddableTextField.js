// Text field with a button to add another of the same type
// Not going to be used, not enough time :(

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Image,
  TextInput,
  Text,
  View
} from 'react-native';


import {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react';

var Button = require('react-native-button');

class AddableTextField extends Component {

  buttonClicked(event) {
    console.log('buttonClicked');
  }

  render() {

      return (
      <Button
        style={styles.button}
        onPress={this.buttonClicked}>
      </Button>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCCCC'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  button: {
    width: 10,
    height: 10,
    textAlign: 'center',
    marginBottom: 7,
    borderRadius: 2
  },
  icon:{
    justifyContent: 'center',
    width: 20,
    height: 20
  },
  buttonImage: {
    textAlign: 'center',
    fontSize: 15
  }
});


module.exports = AddableTextField;
