import React, {
  AppRegistry,
  SegmentedControlIOS,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import OperationView from '../TheFishingNetwork/OperationView';

export var SegmentControl = React.createClass({
  getInitialState() {
    return {
      values: ['Operation', 'Catch', 'Species'],
      value: 'Operation',
      selectedIndex: 0
    };
  },
  render() {
    databaseView = null
    if (this.state.selectedIndex == 0) {
      databaseView = <OperationView />
    }
    return (
      <View style={styles.segment}>
      <Text>Event</Text>
      <SegmentedControlIOS
        values={this.state.values}
        selectedIndex={this.state.selectedIndex}
        onChange={this._onChange}
        onValueChange={this._onValueChange}/>
        <Text style={styles.text} >
          Value: {this.state.value}
        </Text>
        <Text style = {styles.text} >
          Index: {this.state.selectedIndex}
        </Text>
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


module.exports = SegmentControl;
