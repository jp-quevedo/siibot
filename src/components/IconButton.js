import {
    Pressable,
    StyleSheet,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import colors from '../utils/globals/colors'

const IconButton = ({ onPress, title }) => {

    return (
        <Pressable
            onPress = { onPress }
            style = { styles.buttonContainer }
        >
            <MaterialIcons name = { title } size = { 40 } color = { colors.button } />
        </Pressable>
    )
}

export default IconButton

const styles = StyleSheet.create({
    buttonContainer: {
        alignContent: 'center',
        alignSelf: 'center',
        height: 'auto',
        padding: 10,
        width: 'auto'
    }
})