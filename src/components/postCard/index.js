import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ICON_CONSTANTS, colors, hp, wp} from '../../constants';
import styles from './styles';

export const PostCard = props => {
  const {data, onPostPressed} = props;
  return (
    <TouchableOpacity onPress={onPostPressed} style={styles.container}>
      <View style={styles.titleContainer}>
        <ICON_CONSTANTS.FontAwesome
          name={'user-circle-o'}
          style={styles.user}
        />
        <Text style={styles.title}>{data.title}</Text>
      </View>
      <Text style={styles.body}>{data.body}</Text>
    </TouchableOpacity>
  );
};
