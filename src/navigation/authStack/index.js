import React from 'react';
import {Login} from '../../screens';
import {createStackNavigator} from '@react-navigation/stack';

const StackAuth = createStackNavigator();

export const AuthStack = () => {
  const navigationOptions = () => ({
    headerShown: false,
    animationEnabled: true,
  });
  return (
    <StackAuth.Navigator initialRouteName="Login">
      <StackAuth.Screen
        name={'Login'}
        component={Login}
        options={navigationOptions}
      />
    </StackAuth.Navigator>
  );
};
