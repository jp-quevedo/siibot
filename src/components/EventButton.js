import {
    Pressable,
    StyleSheet,
    Text,
} from 'react-native'

import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const EventButton = ({onPress, screenWidth, title}) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.buttonContainer, {width: screenWidth - 60}]}
        >
            <Text style={styles.buttonTitle}>{title}</Text>
        </Pressable>
    )
}

export default EventButton

const styles = StyleSheet.create({

    buttonContainer: {
        alignContent: 'center',
        alignSelf: 'center',
        backgroundColor: colors.button,
        borderColor: colors.button,
        borderRadius: 8,
        padding: 10,
    },

    buttonTitle: {
        color: colors.text,
        fontFamily: fonts.regular,
        fontSize: 16,
        textAlign: 'center',
    }
})