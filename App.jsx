import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import StackNavgation from './src/components/Navigation/StackNavgation';
import store from './src/features';

function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <StackNavgation />
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
