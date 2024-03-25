import {
    Dimensions,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const Header = ({
    navigation,
    title
}) => {

    const windowWidth = Dimensions.get('window').width

    return (
        <View style = {[ styles.headerContainer, { width: windowWidth } ]}>
            {
                navigation.canGoBack() &&
                <Pressable
                    onPress = { () => navigation.goBack() }
                    style = { styles.itemIcon }
                >
                    <MaterialIcons name = 'keyboard-arrow-left' size = { 40 } color = 'white'/>
                </Pressable>
            }
            <Text style = { styles.headerTitle }>{ title }</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: colors.container,
        height: 60,
        position: 'relative'
    },
    headerTitle: {
        alignSelf: 'center',
        color: colors.text,
        fontFamily: fonts.regular,
        fontSize: 20,
        top: 12
    },
    itemIcon: {
        bottom: 10,
        left: 10,
        position: 'absolute'
    }
})