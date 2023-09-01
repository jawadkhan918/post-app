import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      label: {
        fontSize: 18,
        marginBottom: 10,
      },
      radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
      },
      radioCircle: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
      },
      selectedRadioCircle: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#000',
      },
      radioText: {
        fontSize: 16,
        color:colors.BLACK.defaultBlack
      },
});
export default styles;
