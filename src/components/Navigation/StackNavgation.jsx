import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Add from '../../screens/Add';

const Stack = createNativeStackNavigator();

const StackNavgation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {backgroundColor: '#393E46'},
          headerTitleStyle: {color: 'white'},
          headerTitle: 'Dashboard',
        }}
      />
      <Stack.Screen
        name="Add"
        component={Add}
        options={{
          headerStyle: {backgroundColor: '#393E46'},
          headerTitleStyle: {color: 'white'},
          headerTitle: 'Add new task',
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavgation;
