import React, {useEffect, useState} from 'react';
import {View, Image, Text, Alert} from 'react-native';
import {colors, rwp} from '../../../constants';
import styles from './styles';
import {
  GradientButton,
  KeyboardAvoidingScrollView,
  BackButton,
} from '../../../components';
import {navigateReset} from '../../../navigation/navigationRef';
import {logInReducer} from '../../../redux/authSlice/logInSlice';
import {useSelector, useDispatch} from 'react-redux';
import {reset} from '../../../redux/authSlice/logInSlice';
import {icons} from '../../../assets/icons';

export const Profile = props => {
  const {navigation} = props;
  const {userData} = useSelector(logInReducer);
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(
    'https://lh3.googleusercontent.com/a/AAcHTtdE2kNhSrAq6A_P_HMQju-s9joQmlLp_MxydbctsEbs=s120',
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setfirstName(userData?.givenName);
    setlastName(userData?.familyName);
    setEmail(userData?.email);
    setImage(userData?.photo);
  }, [userData]);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingScrollView>
        <View style={styles.header} />
        <BackButton
          btnStyle={styles.btnStyle}
          backPress={() => navigation.goBack()}
        />
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.dummyProfile}
            resizeMode="cover"
            source={image ? {uri: image} : icons.dummyProfile}
          />
        </View>
        <View style={styles.infoContainerStyle}>
          <View style={styles.nameContainerStyle}>
            <Text style={styles.infoTextStyle}>{firstName}</Text>
            <Text style={styles.infoTextStyle}>{lastName}</Text>
          </View>
          <Text style={styles.infoTextStyle}>{email}</Text>
        </View>
        <View style={{paddingHorizontal: rwp(20)}}>
          <GradientButton
            onPress={() => {
              Alert.alert('', 'Are you sure you want to logout?', [
                {
                  text: 'No',
                  onPress: () => {},
                },
                {
                  text: 'Yes',
                  onPress: () => {
                    dispatch(reset());
                    navigateReset('AuthStack');
                  },
                },
              ]);
            }}
            colors={[
              colors.GREEN.lightGreen,
              colors.GREEN.darkGreen,
              colors.GREEN.darkGreen,
            ]}
            title={'Log Out'}
            containerStyle={styles.diffButtonStyle}
          />
        </View>
      </KeyboardAvoidingScrollView>
    </View>
  );
};
