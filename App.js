import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {Navigation} from './src/navigation';
import store from './src/redux/store';
import 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import {LoaderProvider} from './src/hooks';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);
LogBox.ignoreAllLogs();
export const App = () => {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LoaderProvider>
          <Navigation />
        </LoaderProvider>
      </PersistGate>
    </Provider>
  );
};
