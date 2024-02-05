import {
    Pressable,
    StyleSheet,
    Text,
} from 'react-native'

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
        backgroundColor: '#0C7075',
        borderColor: '#0C7075',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: 'row',
        padding: 10,
    },

    buttonTitle: {
        color: '#E1E1E1',
        fontSize: 15,
        fontWeight: '800',
        textAlign: 'center',
    },
    
})