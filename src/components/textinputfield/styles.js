import { StyleSheet, Text, View } from 'react-native';
import { colors, rfs, rhp, rwp } from '../../constants';
import fonts from '../../constants/fonts';
const styles = StyleSheet.create({
  inputOuterView: {
    //marginTop: rhp(94),
  },
  inputViewCon: {
    borderWidth: 1,
    borderColor: colors.GRAY.lightGray,
    flexDirection: 'row',
    tent: 'center',
    alignItems: 'center',
    paddingHorizontal: rwp(18),
    borderRadius: 10,
    marginTop: rhp(9),
    // height: rhp(55),

  },
  userInfoText: {
    //marginLeft: rwp(10),
    marginLeft: rwp(5),
    fontFamily: fonts.SF_PRO_TEXT.Poppins.Regular,
    fontSize: rfs(14),
    fontWeight: '600',
    lineHeight: rhp(21),
    color: colors.BLACK.defaultBlack,
  },
  ic_style: {
    height: rhp(16),
    width: rwp(17),
    marginRight: rwp(9),
  },
  iconArrow: {
    height: rhp(13),
    width: rwp(7),
  },
  ic_eyeCon: {
    height: rhp(14),
    width: rwp(19),
    marginLeft: rwp(10),
  },

  inputCon: {
    flex: 1,
    color: colors.GRAY.lightGray,
    padding: 0,
    color: colors.BLACK.defaultBlack,
    height: rhp(55),
  },
  iconContainer: {
    marginRight: rwp(9),
  },
  errorMessage: {
    marginTop: rhp(2),
    marginLeft: rwp(7),
    color: colors.RED.defaultRed,
  },
  strongViewCon: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: rwp(16),
    marginTop: rhp(5),
  },
  view: {
    height: rhp(2),
    width: rwp(7),
    backgroundColor: colors.GREEN.lightGreen,
    marginHorizontal: rwp(2),
  },
  strongTxt: {
    marginLeft: rwp(4),
    color: colors.GREEN.lightGreen,
    fontFamily: fonts.SF_PRO_TEXT.Poppins.Regular,
    fontSize: rfs(10),
  },
});
export default styles;
