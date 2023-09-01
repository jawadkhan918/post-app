import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {styles} from './styles';
import {ICON_CONSTANTS, colors, rhp} from '../../constants';
import {ShowStack} from './showStack';
import {ProfileStack} from './profileStack';

const Tab = createBottomTabNavigator();
export default function BottomStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.bottomBar,
        headerShown: false,
        tabBarLabelPosition:"beside-icon"
      }}>
      <Tab.Screen
        name="showStack"
        component={ShowStack}
        options={{
          tabBarLabel: 'Show',
          tabBarIcon: ({color, size}) => (
            <ICON_CONSTANTS.FontAwesome
              name={'list-alt'}
              size={rhp(25)}
              color={colors.GREEN.lightGreen}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <ICON_CONSTANTS.FontAwesome
              name={'user-circle-o'}
              size={rhp(25)}
              color={colors.GREEN.lightGreen}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
