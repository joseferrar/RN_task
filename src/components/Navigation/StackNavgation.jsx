import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Add from '../../screens/Add';
import {useSelector} from 'react-redux';
import {Spinner} from '../Spinner/Spinner';

const Stack = createNativeStackNavigator();

const StackNavgation = () => {
  const {loading} = useSelector(state => state.common);
  return (
    <>
      {loading && <Spinner />}
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
    </>
  );
};

export default StackNavgation;
