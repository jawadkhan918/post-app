import React from "react";
import { View, TouchableOpacity, Text } from 'react-native';
import { ICON_CONSTANTS, colors, hp, wp } from "../../constants";
import styles from "./styles";

export const TaskCard = (props) => {
    const { data } = props;
    return (
        <View style={ styles.container } >
            <View style={ styles.checkBoxContainer }>
                <View style={ styles.checkBox }>
                    { data.completed && <ICON_CONSTANTS.IonIcons
                        name={ "checkmark-sharp" }
                        size={ hp(1.5) }
                        color={ colors.GRAY.darkGray } /> }
                </View>
                <View style={ styles.textContainer }>
                    <Text style={ { color: colors.GRAY.darkGray } }>{ data.title }</Text>
                </View>
            </View>
        </View>
    );
};