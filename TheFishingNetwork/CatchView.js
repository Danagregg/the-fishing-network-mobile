// CatchView

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  View
} from 'react-native';


export var CatchView = React.createClass ({

  getInitialState(){
    return {
      species:'Tuna',
      weight: '150',
      count:'4',
      pricelb: '$150/lb',

    };
  },

  // This is gross, but hackathon yolo
  render() {
    return (
      <View>
        <ScrollView
          style={styles.scrollView}>
        <View style={styles.textInputs}>
          <Text style={styles.textLabel}>
              Species Caught
          </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(species) => this.setState({species})}
            value={this.state.species}
          />
        </View>
        <View style={styles.textInputs}>
          <Text style={styles.textLabel}>
             Total Weight Caught
          </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(weight) => this.setState({weight})}
            value={this.state.weight}
            />
        </View>
        <View style={styles.textInputs}>
          <Text style={styles.textLabel}>
            Total Fish Caught
          </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(count) => this.setState({count})}
            value={this.state.count}
          />
        </View>
        <View style={styles.textInputs}>
          <Text style={styles.textLabel}>
              Price per Lb
          </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(pricelb) => this.setState({pricelb})}
            value={this.state.pricelb}
          />
        </View>
        </ScrollView>
      </View>
    );
  }
});

  const styles = StyleSheet.create({
  textInputs: {
    flexDirection:'row',
    margin: 10
  },
  scrollView: {
    flex:1
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


  module.exports = CatchView;
