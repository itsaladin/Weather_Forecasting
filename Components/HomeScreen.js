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

export default class HomeScreen extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <MainHeader />
        <Text>I am homde scrern.</Text>
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
