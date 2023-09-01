import { StyleSheet } from 'react-native';
import { colors, hp, wp, } from '../../constants';

const styles = StyleSheet.create({
    container: {
        shadowColor: colors.BLACK.default,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        // height: hp(5.5),
        width: "95%",
        alignSelf: 'center',
        backgroundColor: colors.WHITE.background,
        paddingHorizontal: wp(3),
        paddingVertical: hp(1),
        borderRadius: hp(1),
        justifyContent: "center",
        marginHorizontal: wp(2),
        marginBottom: hp(2)
    },
    title: {
        fontSize: hp(2),
        color: colors.GREEN.darkGreen,
        width: "85%"
    },
    body: {
        marginTop: hp(2),
        color: colors.GRAY.descriptionText
    },
    user: {
        fontSize: hp(4),
        color: colors.GRAY.lightGray
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default styles;