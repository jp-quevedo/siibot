import {
    StyleSheet,
    Text,
    View
} from 'react-native'

import EventButton from './EventButton'
import colors from '../utils/globals/colors'

const Error = ({ message, textButton, onRetry }) => {
    return (
        <View style = { styles.container }>
            <Text style = { styles.errorMessage }>{ message }</Text>
            <EventButton title = { textButton } onPress = { onRetry }/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        height: 400,
        justifyContent: 'center'
    },
    errorMessage: {
        color: colors.text,
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    }
})

export default Error