import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export const Button = ({ onPress, title, diffButtonStyle, tileStyle, disabled }) => {
  return (
    <TouchableOpacity onPress={ onPress } disabled={ disabled } style={ [styles.container(disabled), diffButtonStyle] }>
      <Text style={ [styles.titleTxt, { ...tileStyle }] }>{ title }</Text>
    </TouchableOpacity>
  );
};
