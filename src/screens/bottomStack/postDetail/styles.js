import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';

export default StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    backgroundColor: colors.GREEN.primaryGreen,
  },
  safeAreaStyle: {
    backgroundColor: colors.GREEN.tintedGreen,
  },
  headerStyle: {
    paddingVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: colors.GREEN.tintedGreen,
    borderBottomWidth: 0.4,
    borderBottomColor: colors.GRAY.lightGray,
  },
  container: {
    marginTop: 15,
    paddingHorizontal: 15,
    backgroundColor: colors.GREEN.primaryGreen,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleTextStyle: {
    fontSize: 18,
    marginStart: 15,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
    marginTop: 15,
    lineHeight: 24,
  },
});
