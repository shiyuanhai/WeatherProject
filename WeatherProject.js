import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

class WeatherProject extends Component{
  constructor(props){
    super(props);
    this.state = {
      zip: '',
    };
    this._handleTextChange = this._handleTextChange.bind(this);
  }

  _handleTextChange(text) {
    this.setState({
      zip: text,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        You input {this.state.zip}.
        </Text>
        <TextInput style={styles.input} onChangeText={this._handleTextChange} autoFocus={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40,
  },
});

export default WeatherProject;
