import { StyleSheet } from 'react-native';
import { colors, rfs, rhp, wp, rwp } from '../../../constants';
import fonts from '../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE.defaultWhite,
  },
  backgroundImageContainer: {
    flex: 1,
    backgroundColor: colors.WHITE.defaultWhite,
    paddingHorizontal: rwp(20),
  },
  titleText: {
    fontSize: rhp(35),
    marginTop: rhp(100),
    alignSelf: 'center',
    fontFamily: fonts.SF_PRO_TEXT.Poppins.SemiBold,
  },
  lowerContainer: {
    marginTop: rhp(40),
  },
  emailConatiner: {
    marginTop: rhp(40),
  },
  diffInputCon: {
    marginTop: rhp(12),
  },
  rememberMeViewCon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: rwp(10),
  },
  ic_checkBox: {
    height: rhp(14),
    width: rwp(14),
  },
  rememberTxt: {
    fontFamily: fonts.SF_PRO_TEXT.Poppins.Light,
    fontWeight: '500',
    fontSize: rfs(12),
    lineHeight: rhp(17),
    color: colors.BLACK.defaultBlack,
    marginLeft: rwp(4),
    flex: 1,
  },
  forgotTxt: {
    color: colors.GRAY.darkGray,
    fontFamily: fonts.SF_PRO_TEXT.Poppins.Regular,
    fontSize: rfs(12),
    lineHeight: rhp(17),
  },
  scannerCon: {
    marginTop: rhp(53),
    justifyContent: "center",
    alignSelf: 'center',
    width: wp(40),
    flexDirection: 'row',
  },
  diffButtonStyle: {
    marginTop: rhp(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: rhp(20)
  },
  SignUpBtnCon: {
    flexDirection: 'row',
    marginTop: rhp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountTxt: {
    fontFamily: fonts.SF_PRO_TEXT.Poppins.Light,
    fontWeight: '500',
    fontSize: rfs(12),
    lineHeight: rhp(17),
    color: colors.GRAY.textLightGray,
    marginRight: rwp(4),
  },
  signUpBtCon: {
    padding: rhp(5),
    paddingLeft: 0,
  },
  signUpBtTxt: {
    color: colors.GREEN.lightGreen,
    fontFamily: fonts.SF_PRO_TEXT.Poppins.Light,
    fontWeight: '500',
    fontSize: rfs(13),
    lineHeight: rhp(17),
    textDecorationLine: 'underline',
  },
  logoContainer: {
    width: '100%',
    height: rhp(50),
    borderRadius: rhp(10),
    borderColor: colors.GRAY.textLightGray,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
  },
  socialLogoImage: {
    width: rwp(20),
    height: rhp(20),
    resizeMode: 'contain',
    marginRight: rwp(10)
  },
});

export default styles;
