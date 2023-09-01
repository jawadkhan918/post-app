import moment from 'moment';
import {
  statusCodes,
  GoogleSignin,
} from '@react-native-google-signin/google-signin';

class utilsClass {
  isEmailValid = email => {
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,20}$/;
    return reg.test(email);
  };
  isEmpty = obj => {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }

    return true;
  };
  tryGoogleSignIn = async response => {
    try {
      await GoogleSignin?.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      response({success: true, ...userInfo});
    } catch (error) {
      let errorMessage = '';
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        errorMessage = 'user cancelled the login flow';
      } else if (error.code === statusCodes.IN_PROGRESS) {
        errorMessage = 'sign in is in progress already';
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        errorMessage = 'play services not available or outdated';
      } else {
        errorMessage = 'some other error happened';
      }
      response({success: false, errorMessage});
    }
  };
  getDynamicGreeting = userName => {
    const now = moment();
    const hour = now.hour();

    let greeting;

    if (hour >= 4 && hour < 12) {
      greeting = 'Good morning';
    } else if (hour >= 12 && hour < 16) {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good night';
    }
    return `${greeting},\n${userName}`;
  };
}

const utils = new utilsClass();

export default utils;
