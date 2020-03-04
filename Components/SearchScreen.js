import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import MainHeader from './MainHeader';
import { TextInput, Card, List, } from 'react-native-paper';

export default class SearchScreen extends React.Component {
  state = {
    text: '',
    cities: []
  };
  fetchCities(text){
    this.setState({ text })
    fetch(`http://autocomplete.wunderground.com/aq?query=${text}`)
    // fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=1600+Amphitheatre&key=${text}&sessiontoken=1234567890`)
    .then(data=>data.json())
    .then(city=>{
        this.setState({
          cities:city.RESULTS.slice(0,9)
        });
        // console.log(this.state.cities);
    })
  }

  render(){
    let renderCity = <Card><List.Item title="no cities" /></Card>
    if(this.state.cities.length > 0){
      let renderCity = this.state.cities.map(city=>{
        return(
          <Card style={{margin:5}} key={city.lat}>
            <Card.Item title={city.name}/>
          </Card>
        )
      })
    }
    return (
      <View>
        <MainHeader />
        <TextInput
          label='Email'
          value={this.state.text}
          onChangeText={text => this.fetchCities(text)}
        />
      <ScrollView>
        {renderCity}
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  }
});
