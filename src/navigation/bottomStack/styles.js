import {StyleSheet} from 'react-native';
import {IS_IPHONE_X, colors, rhp, rwp} from '../../constants';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    height: rwp(50),
    width: rwp(50),
    justifyContent: 'center',
  },
  bottomBar: {
    height: IS_IPHONE_X?rhp(80): rhp(70),
    borderRadius: rhp(10),
    backgroundColor: colors.GREEN.tintedGreen,
  },
  btnCircleUp: {
    width: rhp(54),
    height: rhp(54),
    borderRadius: rhp(27),
    alignItems: 'center',

    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: rhp(15),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    alignSelf: 'center',
    padding: rhp(6),
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
  historyIcon: {
    height: rhp(25),
    width: rhp(25),
    resizeMode: 'contain',
  },
});
