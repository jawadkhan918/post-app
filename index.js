import { AppRegistry } from 'react-native';
import { App } from './App';
import { name as appName } from './app.json';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '627164806831-k3erisd06nv576kslhqmub23ne22cdvk.apps.googleusercontent.com',
  offlineAccess: true,
});

AppRegistry.registerComponent(appName, () => App);
