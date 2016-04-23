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
      fisherName:'Hello',
      fisherAddress: 'Address',
      fisherPhone:'905-640',
      fisherEmail:'hello@gmail.com'
    };
  },

// This is gross, but hackathon yolo
  render() {
    return (
      <View>
        <View style={styles.textInputs}>
          <Text style={styles.textLabel}>
              Fisherman Name
          </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(fisherName) => this.setState({fisherName})}
            value={this.state.fisherName}
          />
        </View>
        <View style={styles.textInputs}>
          <Text style={styles.textLabel}>
            Fisherman Address
          </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(fisherAddress) => this.setState({fisherAddress})}
            value={this.state.fisherAddress}
            />
        </View>
        <View style={styles.textInputs}>
          <Text style={styles.textLabel}>
            Fisherman Phone Number
          </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(fisherPhone) => this.setState({fisherPhone})}
            value={this.state.fisherPhone}
          />
        </View>
          <View style={styles.textInputs}>
            <Text style={styles.textLabel}>
              Fisherman Email
            </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(fisherEmail) => this.setState({fisherEmail})}
            value={this.state.fisherEmail}
          />
        </View>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  textInputs: {
    flexDirection:'row',
    margin: 10
  },
  textLabel: {
    fontSize:10,
    fontWeight:'bold',
    margin: 5,
    flex:0.3
  },
  textBox: {
    height: 30,
    borderColor: 'gray',
    flex: 1,
    borderWidth: 1
  },
});


module.exports = OperationView;
