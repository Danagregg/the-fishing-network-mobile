//SpeciesView

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  View
} from 'react-native';

export var SpeciesView = React.createClass ({

  getInitialState(){
    return {
      scientificName:'Tuna agaba',
      commonName: 'Tuna',
      length:'4',
      age: '56',
      sex: 'F',
      maturity: 'Youth',
      sampleDetails: 'Fat'
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
              Scientific Name
          </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(scientificName) => this.setState({scientificName})}
            value={this.state.scientificName}
          />
        </View>
        <View style={styles.textInputs}>
          <Text style={styles.textLabel}>
             Common Name
          </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(commonName) => this.setState({commonName})}
            value={this.state.commonName}
            />
        </View>
        <View style={styles.textInputs}>
          <Text style={styles.textLabel}>
            Length
          </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(length) => this.setState({length})}
            value={this.state.length}
          />
        </View>
        <View style={styles.textInputs}>
          <Text style={styles.textLabel}>
              Age
          </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(age) => this.setState({age})}
            value={this.state.age}
          />
        </View>
        <View style={styles.textInputs}>
          <Text style={styles.textLabel}>
              Sex
          </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(sex) => this.setState({sex})}
            value={this.state.sex}
          />
        </View>
        <View style={styles.textInputs}>
          <Text style={styles.textLabel}>
              Maturity
          </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(maturity) => this.setState({maturity})}
            value={this.state.maturity}
          />
        </View>

        <View style={styles.textInputs}>
          <Text style={styles.textLabel}>
              Features
          </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(sampleDetails) => this.setState({sampleDetails})}
            value={this.state.sampleDetails}
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


  module.exports = SpeciesView;
