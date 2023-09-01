import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Profile} from '../../../screens';

const StackAuth = createStackNavigator();

export const ProfileStack = () => {
  const navigationOptions = () => ({
    headerShown: false,
    animationEnabled: true,
  });
  return (
    <StackAuth.Navigator initialRouteName="Profile">
      <StackAuth.Screen
        name="Profile"
        component={Profile}
        options={navigationOptions}
      />
    </StackAuth.Navigator>
  );
};
