import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavgation from './src/components/Navigation/StackNavgation';

function App() {
  return (
    <>
      <NavigationContainer>
        <StackNavgation />
      </NavigationContainer>
    </>
  );
}

export default App;
