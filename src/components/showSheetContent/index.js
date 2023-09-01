import React from 'react';
import {View} from 'react-native';
import {RadioButton} from '../index';

const radioList = ['Render ToDos', 'Render Posts'];

export const ShowSheetContent = props => {
  const {selectedOption, setSelectedOption} = props;
  return (
    <View>
      {/*<GradientText style={styles.sheetTitle}>
        {'Select an option:'}
      </GradientText>*/}
      <RadioButton
        options={radioList}
        onSelect={setSelectedOption}
        selectedOption={selectedOption}
      />
    </View>
  );
};
