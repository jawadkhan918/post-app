import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export const RadioButton = props => {
  const {options, selectedOption, onSelect} = props;
  return (
    <View>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.radioButton}
          onPress={() => onSelect(option)}>
          <View style={styles.radioCircle}>
            {selectedOption === option && (
              <View style={styles.selectedRadioCircle} />
            )}
          </View>
          <Text style={styles.radioText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
