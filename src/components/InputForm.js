import {
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'

import colors from '../utils/globals/colors'

const InputForm = ({
    label,
    onChangeText,
    sensitiveInfo,
    value,
    warning
}) => {

    const windowWidth = Dimensions.get('window').width

    return (
        <View>
            <TextInput
                onChangeText = { onChangeText }
                placeholder = { label }
                placeholderTextColor = { colors.text }
                secureTextEntry = { sensitiveInfo }
                style = {[ styles.textInput, { width: windowWidth - 60 } ]}
                value = { value }
            />
            { warning
                ? <Text style = { styles.warningText }>{ warning }</Text>
                : null
            }
        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({
    textInput: {
        alignSelf: 'center',
        backgroundColor: colors.input,
        borderColor: colors.input,
        borderRadius: 8,
        marginBottom: 10,
        padding: 10
    },
    warningText: {
        alignSelf: 'center',
        color: colors.error,
        margin: 0,
        paddingBottom: 15
    }
})