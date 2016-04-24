//Segment Controller only supported on iOS - hacky fix for this on Android :>

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CatchView from '../TheFishingNetwork/CatchView';
import OperationView from '../TheFishingNetwork/OperationView';
import SpeciesView from '../TheFishingNetwork/SpeciesView';

export var SegmentControl = React.createClass({
  getInitialState() {
    return {
      values: ['Operation', 'Catch', 'Species'],
      value: 'Operation',
      databaseView: null,
      selectedIndex: 0
    };
  },

  showOperations(event) {
    this.state.databaseView = <OperationView/>
  },

  showCatch(event) {
    this.state.databaseView = <CatchView/>
  },

  showSpecies(event) {
    this.state.databaseView = <SpeciesView/>
  },

  render() {
    return (
      <View style={styles.segment}>
      <Button> onPress={this.showOperations}><Text>Operations</Text></Button>
      <Button>onPress={this.showCatch}><Text>Catch</Text></Button>
      <Button>onPress={this.showSpecies}><Text>Species</Text></Button>
        {databaseView}
      </View>
    );
  },
  _onChange(event) {

    this.setState({
      selectedIndex: event.nativeEvent.selectedSegmentIndex,
    });
  },
  _onValueChange(value) {
    this.setState({
      value: value,
    });
  }
});

const styles = StyleSheet.create({
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
  segment: {
    marginTop: 10,
    marginHorizontal: 10
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


module.exports = ButtonControl;
