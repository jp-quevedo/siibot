import {
    ActivityIndicator,
    StyleSheet,
    View
} from 'react-native'

import colors from '../utils/globals/colors'

const Loading = () => {
    return (
        <View style = { styles.loading }>
            <ActivityIndicator size = { 80 } color = { colors.text } />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    loading: { 
        alignItems: 'center',
        backgroundColor: colors.button,
        flex: 1, 
        justifyContent: 'center'
    }
})