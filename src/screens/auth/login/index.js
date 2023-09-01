import React, {useRef, useContext, useState} from 'react';
import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {colors, ICON_CONSTANTS, loginStrings} from '../../../constants';
import styles from './styles';
import {
  Textinputfield,
  GradientText,
  GradientButton,
  KeyboardAvoidingScrollView,
} from '../../../components';
import {icons} from '../../../assets/icons';
import utils from '../../../utils';
import {LoaderContext} from '../../../hooks';
import {navigateReset} from '../../../navigation/navigationRef';
import {updateUser} from '../../../redux/authSlice/logInSlice';

export const Login = props => {
  const {setLoader} = useContext(LoaderContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const isEmailValid = () => {
    let errorMessage = '';
    if (email.length > 0 && !utils.isEmailValid(email)) {
      errorMessage = 'Invalid Email!';
    }
    return errorMessage;
  };

  const isPassword = () => {
    let errorMessage = '';
    return errorMessage;
  };

  const signIn = () => {
    if (email.length < 1) {
      Alert.alert('Email', 'Please enter a email');
      return;
    } else if (!utils.isEmailValid(email)) {
      Alert.alert('Invalid email', 'Please enter a valid email');
      return;
    } else if (password.length < 1) {
      Alert.alert('Password', 'Please enter a password');
      return;
    }

    setLoader(() => true);
    setTimeout(() => {
      setLoader(() => false);
      setTimeout(() => {
        dispatch(
          updateUser({
            user: {
              email: email,
              givenName: 'Travis',
              familyName: 'Dixon',
              photo: 'https://randomuser.me/api/portraits/men/3.jpg',
            },
          }),
        );
        navigateReset('BottomStack');
      }, 400);
    }, 1500);
  };

  return (
    <View style={styles.backgroundImageContainer}>
      <KeyboardAvoidingScrollView>
        <GradientText style={styles.titleText}>Sign In</GradientText>
        <View style={styles.lowerContainer}>
          <Textinputfield
            ref={emailRef}
            title={loginStrings.email}
            source={icons.ic_userProfile}
            returnKeyType="next"
            placeholder={loginStrings.email}
            value={email}
            onChangeText={setEmail}
            diffInputCon={styles.emailConatiner}
            iconName={loginStrings.email_Ic}
            Icon={ICON_CONSTANTS.Fontisto}
            errorMessage={isEmailValid()}
            onSubmitEditing={() => passwordRef.current.focus()}
            autoCapitalize={'none'}
          />
          <Textinputfield
            ref={passwordRef}
            title={loginStrings.password}
            source={icons.ic_passwordKey}
            diffInputCon={styles.diffInputCon}
            placeholder={loginStrings.userPassword}
            secureTextEntry={!show}
            eyePress={() => setShow(!show)}
            value={password}
            onChangeText={setPassword}
            isEye
            eye={icons.ic_eye}
            errorMessage={isPassword()}
          />
          <GradientButton
            onPress={signIn}
            colors={[
              colors.GREEN.lightGreen,
              colors.GREEN.darkGreen,
              colors.GREEN.darkGreen,
            ]}
            title={loginStrings.signIn}
            containerStyle={styles.diffButtonStyle}
          />
          <TouchableOpacity
            onPress={() => {
              utils.tryGoogleSignIn(res => {
                if (res.success) {
                  dispatch(updateUser(res));
                  navigateReset('BottomStack');
                }
              });
            }}
            style={styles.logoContainer}>
            <Image source={icons.googleLogo} style={styles.socialLogoImage} />
            <Text style={styles.forgotTxt}>{loginStrings.logInWithGoogle}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingScrollView>
    </View>
  );
};
