import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {images} from '../../assets/images';

export const BackButton = ({backPress, btnStyle, disabled}) => {
  return (
    <TouchableOpacity
      style={[btnStyle]}
      onPress={backPress}
      disabled={disabled}>
      <Image
        style={styles.imgBack}
        resizeMode={'contain'}
        source={images.img_back}
      />
    </TouchableOpacity>
  );
};
4;
