import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Appbar } from 'react-native-paper';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';

const MainHeader = () => {
    return (
        <View>
            <Appbar.Header>
            <Appbar.Content
            title="Weather app"
            subtitle="select a location"
            style={{alignItems:'center'}}
            />
        </Appbar.Header>
        </View>
    )
}

export default MainHeader;

const styles = StyleSheet.create({})
