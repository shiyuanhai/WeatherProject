import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';
import Forecast from './Forecast';

class WeatherProject extends Component{
  constructor(props){
    super(props);
    this.state = {
      zip: '',
      forecast: null,
    };
    this._handleTextChange = this._handleTextChange.bind(this);
  }

  _handleTextChange(event) {
    var zip = event.nativeEvent.text;
    this.setState({
      zip: zip,
    });
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + zip + '&appid=useyourownapikey')
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        this.setState({
          forecast: {
            main: responseJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: Math.round(responseJSON.main.temp * 9 / 5 - 459.67),
          }
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  render() {
    var content = null;
    if(this.state.forecast !== null){
      content = <Forecast
                  main={this.state.forecast.main}
                  description={this.state.forecast.description}
                  temp={this.state.forecast.temp}/>;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        Type zip code for search(US only) {this.state.zip}.
        </Text>
        {content}
        <TextInput style={styles.input} returnKeyType = {"go"} onSubmitEditing={this._handleTextChange} autoFocus={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D4D4D',
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
