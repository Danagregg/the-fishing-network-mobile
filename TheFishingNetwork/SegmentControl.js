import React, {
  AppRegistry,
  SegmentedControlIOS,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';


export var EventSegmentedControlExample = React.createClass({
  getInitialState() {
    return {
      values: ['One', 'Two', ' Three'],
      value: 'Not Selected',
      selectedIndex: undefined
    };
  },
  render() {
    return (
      <View>
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

module.exports = EventSegmentedControlExample;
