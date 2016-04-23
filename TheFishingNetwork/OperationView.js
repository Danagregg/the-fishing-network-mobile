// Operation export

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native';


// <TextInput
//     style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//     onChangeText={(text) => this.setState({text})}
//     value={this.state.text}
//   />

export var OperationView = React.createClass ({

  getInitialState(){
    return {
      text:'Hello'
    };
  },

  render() {
    return (
      <TextInput
        style={styles.textBox}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
})

const styles = StyleSheet.create({
  textBox: {
    margin: 10,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1
  },
});


module.exports = OperationView;
