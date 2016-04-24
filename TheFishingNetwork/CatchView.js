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
      dealerId:'987654',
      dealerName: 'Lulu Jones',
      dealerAddress:'90 Avison Way',
      tripStart: new Date().toLocaleDateString(),
      tripEnd: new Date().toLocaleDateString(),
      tripLocations: "Orlando, Vanocuver",
      vesselName: "Black Pearl",
      vesselOwner: "Jones Bobby",
      vesselId: "123456",

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
              Dealer ID
          </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(dealerId) => this.setState({dealerId})}
            value={this.state.dealerId}
          />
        </View>
        <View style={styles.textInputs}>
          <Text style={styles.textLabel}>
             Dealer Name
          </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(dealerName) => this.setState({dealerName})}
            value={this.state.dealerName}
            />
        </View>
        <View style={styles.textInputs}>
          <Text style={styles.textLabel}>
            Dealer Address
          </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(dealerAddress) => this.setState({dealerAddress})}
            value={this.state.dealerAddress}
          />
        </View>
        <View style={styles.textInputs}>
          <Text style={styles.textLabel}>
              Trip Start Date
          </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(tripStart) => this.setState({tripStart})}
            value={this.state.tripStart}
          />
        </View>
        <View style={styles.textInputs}>
          <Text style={styles.textLabel}>
              Trip End Date
          </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(tripEnd) => this.setState({tripEnd})}
            value={this.state.tripEnd}
          />
        </View>
          <View style={styles.textInputs}>
            <Text style={styles.textLabel}>
              Trip Locations
            </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(tripLocations) => this.setState({tripLocations})}
            value={this.state.tripLocations}
          />
        </View>
          <View style={styles.textInputs}>
            <Text style={styles.textLabel}>
              Vessel Name
            </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(vesselName) => this.setState({vesselName})}
            value={this.state.vesselName}
          />
        </View>
          <View style={styles.textInputs}>
            <Text style={styles.textLabel}>
              Vessel Owner
            </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(vesselOwner) => this.setState({vesselOwner})}
            value={this.state.vesselOwner}
          />
        </View>
          <View style={styles.textInputs}>
            <Text style={styles.textLabel}>
              Vessel ID
            </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(vesselId) => this.setState({vesselId})}
            value={this.state.vesselId}
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
