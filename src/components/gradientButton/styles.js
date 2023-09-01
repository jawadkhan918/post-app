import {StyleSheet} from 'react-native';
import {colors, rhp} from '../../constants';
import fonts from '../../constants/fonts';
const styles = StyleSheet.create({
  linearGradient: {
    height: rhp(50),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: rhp(18),
    lineHeight: rhp(26),
    fontFamily: fonts.SF_PRO_TEXT.Poppins.Medium,
    color: colors.WHITE.background,
  },
});
export default styles;
