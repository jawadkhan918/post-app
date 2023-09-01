import {StyleSheet} from 'react-native';
import {colors, rfs, hp, rhp, wp, rwp} from '../../../constants';
import fonts from '../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GREEN.tintedGreen,
    paddingHorizontal: rwp(20),
    paddingTop: rhp(50),
  },
  greetingText: {
    fontSize: rhp(28),
    fontFamily: fonts.SF_PRO_TEXT.Poppins.Medium,
  },
  sheetContainer: {
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: rhp(20),
    padding: rhp(20),
  },
  sheetTitle: {
    fontSize: rhp(18),
    fontFamily: fonts.SF_PRO_TEXT.Poppins.Regular,
    alignSelf: 'center',
    marginBottom: rhp(20),
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    fontSize: rhp(14),
    color: colors.WHITE.defaultWhite,
    fontFamily: fonts.SF_PRO_TEXT.Poppins.Regular,
  },
  switchButtonStyle: {
    right: 20,
    bottom: rhp(20),
    borderRadius: 20,
    paddingVertical: 10,
    position: 'absolute',
    paddingHorizontal: 15,
    backgroundColor: '#00ad00',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  listContainer:{paddingBottom:rhp(25)}
});

export default styles;
