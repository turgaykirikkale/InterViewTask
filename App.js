import React, { useState } from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import Entrypoint from './src/Navigation/Entrypoint';
import store from './src/GlobalStore';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Entrypoint />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;