import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import notifee from '@notifee/react-native';
import StackNavgation from './src/components/Navigation/StackNavgation';
import store from './src/features';

function App() {
  const permission = async () => {
    await notifee.requestPermission();
  };
  useEffect(() => {
    permission();
  }, []);
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
