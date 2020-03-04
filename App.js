import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './Components/HomeScreen';
import SearchScreen from './Components/SearchScreen';

// const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render(){
    return (
      // <NavigationContainer>
      //   <Tab.Navigator> 
      //     <Tab.Screen name="Home" component={HomeScreen} />
      //     <Tab.Screen name="Settings" component={SearchScreen} />
      //   </Tab.Navigator>
      // </NavigationContainer>
      <View>
        {HomeScreen}
      </View>
    );
  }
}
