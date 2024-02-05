import {
    Pressable,
    StyleSheet,
    Text,
} from 'react-native'

const EventButton = ({onPress, title}) => {
    return (
        <Pressable
            onPress={onPress}
            style={styles.buttonContainer}
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
        backgroundColor: '#0C7075',
        borderColor: '#0C7075',
        borderRadius: 10,
        padding: 15,
        width: '90%',
    },

    buttonTitle: {
        color: '#E1E1E1',
        fontSize: 15,
        fontWeight: '800',
        textAlign: 'center',
    }
})