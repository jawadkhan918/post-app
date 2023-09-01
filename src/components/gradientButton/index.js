import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { colors as appColors } from '../../constants';

export const GradientButton = (props) => {
    const { title, colors, containerStyle, onPress, disabled } = props;
    const disabledColors = [
        `${appColors.GREEN.lightGreen}99`,
        `${appColors.GREEN.darkGreen}`,
        `${appColors.GREEN.darkGreen}99`,
    ];
    return (
        <TouchableOpacity disabled={ disabled } onPress={ onPress }>
            <LinearGradient colors={ disabled ? disabledColors : colors } style={ [styles.linearGradient, containerStyle] }>
                <Text style={ styles.buttonText }>
                    { title }
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};
