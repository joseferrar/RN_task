import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Add from '../../screens/Add';

const Stack = createNativeStackNavigator();

const StackNavgation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Add" component={Add} />
    </Stack.Navigator>
  );
};

export default StackNavgation;

const styles = StyleSheet.create({});
