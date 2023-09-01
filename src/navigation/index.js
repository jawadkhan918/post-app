import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStack} from './authStack';
import {navigationRef} from './navigationRef';
import BottomStack from './bottomStack';
import {logInReducer} from '../redux/authSlice/logInSlice';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
  animationEnabled: false,
});

export const Navigation = () => {
  const {userData} = useSelector(logInReducer);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={userData?.rememberMe ? 'BottomStack' : 'AuthStack'}>
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="BottomStack"
          component={BottomStack}
          options={navOptionHandler}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
