import { StyleSheet } from 'react-native';
import { colors, rfs, rhp } from '../../constants';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  container: disabled => ({
    height: rhp(50),
    backgroundColor: disabled ? colors.GRAY.textLightGray : colors.GREEN.lightGreen,
    borderRadius: 10,
  }),
  titleTxt: {
    fontFamily: fonts.SF_PRO_TEXT.Poppins.Medium,
    fontWeight: '500',
    fontSize: rfs(17),
    lineHeight: rhp(26),
    color: colors.WHITE.defaultWhite,
  },
});
export default styles;
