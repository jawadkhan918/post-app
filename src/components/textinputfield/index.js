import React, { useState, forwardRef } from 'react';
import { TextInput, Text, View, Image, TouchableOpacity } from 'react-native';
import { icons } from '../../assets/icons';
import { ICON_CONSTANTS, colors, rhp } from '../../constants';
import styles from './styles';

export const Textinputfield = forwardRef((props, ref) => {
  const {
    placeholder,
    onChangeText,
    value,
    source,
    diffInputCon,
    title,
    isEye,
    secureTextEntry,
    Icon,
    iconName,
    hideAsset,
    hideTitle,
    inputContainer,
    editable,
    inputStyle,
    keyboardType,
    isDownArrow,
    errorMessage,
    isPasswordStrong,
    returnKeyType,
    onSubmitEditing,
    autoCapitalize,
    inputTextStyle,

  } = props;
  const [show, setShow] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const passData = {
    weak: [colors.ORANGE.default, colors.GRAY.lightGray, colors.GRAY.lightGray],
    strong: [
      colors.YELLOW.trafficLight,
      colors.YELLOW.trafficLight,
      colors.GRAY.lightGray,
    ],
    veryStrong: [
      colors.GREEN.lightGreen,
      colors.GREEN.lightGreen,
      colors.GREEN.lightGreen,
    ],
  };


  const handlePress = () => {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  };




  return (
    <View style={ [styles.inputOuterView, { ...diffInputCon }] }>
      { !hideTitle && <Text style={ styles.userInfoText }>{ title }</Text> }
      <View
        style={ [
          styles.inputViewCon,
          { ...inputContainer },
          isFocused && { borderColor: colors.GREEN.lightGreen },
        ] }>
        { !hideAsset && (
          <>
            { iconName ? (
              <Icon
                name={ iconName }
                size={ rhp(18) }
                color={ colors.GRAY.iconLightGray }
                style={ styles.iconContainer }
              />
            ) : (
              <Image
                style={ styles.ic_style }
                resizeMode="contain"
                source={ source }
              />
            ) }
          </>
        ) }
        <TextInput
          { ...props }
          ref={ ref }

          placeholderTextColor={ colors.GRAY.lightGray }
          style={ [styles.inputCon, { ...inputStyle }, inputTextStyle] }
          placeholder={ isFocused ? "" : placeholder }
          //placeholder={ placeholder }
          onChangeText={ onChangeText }
          returnKeyType={ returnKeyType }
          secureTextEntry={ secureTextEntry ? !show : undefined }
          value={ value }
          keyboardType={ keyboardType }
          editable={ editable }
          onFocus={ () => setIsFocused(true) }
          onBlur={ () => setIsFocused(false) }
          onSubmitEditing={ onSubmitEditing }
          autoCapitalize={ autoCapitalize }
        />
        { isEye && (
          <TouchableOpacity
            style={ { padding: rhp(6), } }
            onPress={ () => setShow(!show) }>
            <ICON_CONSTANTS.Feather
              color={ colors.GRAY.iconLightGray }
              size={ rhp(18) }
              name={ show ? 'eye' : 'eye-off' }
            />
          </TouchableOpacity>
        ) }
      </View>
      { errorMessage && <Text style={ styles.errorMessage }>{ errorMessage }</Text> }
      { isPasswordStrong && (
        <View style={ styles.strongViewCon }>
          { (isPasswordStrong == 'Weak'
            ? passData.weak
            : isPasswordStrong == 'Strong'
              ? passData?.strong
              : passData?.veryStrong
          ).map((item, index) => (
            <View key={ index } style={ [styles.view, { backgroundColor: item }] } />
          )) }

          <Text
            style={ [
              styles.strongTxt,
              {
                color:
                  isPasswordStrong == 'Weak'
                    ? colors.ORANGE.default
                    : isPasswordStrong == 'Strong'
                      ? colors.YELLOW.trafficLight
                      : colors.GREEN.lightGreen,
              },
            ] }>
            { isPasswordStrong }
          </Text>
        </View>
      ) }
    </View>
  );
});
