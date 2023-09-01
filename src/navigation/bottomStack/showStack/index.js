import React from 'react';
import {Show, PostDetail} from '../../../screens';
import {createStackNavigator} from '@react-navigation/stack';

const StackAuth = createStackNavigator();

export const ShowStack = () => {
  const navigationOptions = () => ({
    headerShown: false,
    animationEnabled: true,
  });
  return (
    <StackAuth.Navigator initialRouteName="Show">
      <StackAuth.Screen
        name="Show"
        component={Show}
        options={navigationOptions}
      />
      <StackAuth.Screen
        name="PostDetail"
        options={navigationOptions}
        component={PostDetail}
      />
    </StackAuth.Navigator>
  );
};
