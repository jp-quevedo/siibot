import {
    Pressable,
    StyleSheet,
    Text,
} from 'react-native'

import colors from '../utils/globals/colors'

const MenuButton = ({onPress, title}) => {
    return (
        <Pressable
            onPress={onPress}
            style={styles.buttonContainer}
        >
            <Text style={styles.buttonTitle}>{title}</Text>
        </Pressable>
    )
}

export default MenuButton

const styles = StyleSheet.create({

    buttonContainer: {
        alignContent: 'center',
        alignSelf: 'center',
        backgroundColor: colors.button,
        flexDirection: 'row',
        padding: 10,
    },

    buttonTitle: {
        color: colors.text,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    
})