import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigationContainer from './src/navigation/AppNavigationContainer';
import configureStore from './src/store/configureStore';
import { AppearanceProvider } from 'react-native-appearance';

export default function App() {

  const { store, persistor } = configureStore();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppearanceProvider>
          <AppNavigationContainer />
        </AppearanceProvider>
      </PersistGate>
    </Provider>
  );
}


