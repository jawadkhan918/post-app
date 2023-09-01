import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { colors as appColors } from '../../constants';

export const GradientText = props => {
  let defaultColorScheme = [
    appColors.GREEN.darkGradient,
    appColors.GREEN.darkGradient,
    appColors.GREEN.darkGradient,
    appColors.GREEN.lightGreen,
  ];

  return (
    <MaskedView maskElement={ <Text { ...props } /> }>

      <LinearGradient
        colors={ props.colors ? props.colors : defaultColorScheme }>
        <Text { ...props } style={ [props.style, { opacity: 0 }] } />
      </LinearGradient>
    </MaskedView >
  );
};
