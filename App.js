import 'react-native-gesture-handler';
import React from 'react';
import MainNavigation from 'CourierKupesan/src/Config/Navigations/Navigations';
import { Provider } from 'react-redux';
import { store } from 'CourierKupesan/src/Config/Storage';
import { enableScreens } from 'react-native-screens';
import { Root } from 'native-base';
enableScreens()

const App = () => {
  return (
    <Root>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </Root>
  )
}

export default App
