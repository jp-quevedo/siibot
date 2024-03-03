import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const TabBarIcon = ({iconName, focused, title}) => {
    return (
        <View>
            <MaterialIcons name={iconName} size={40} style={styles.tabItemIcon} color={focused ? colors.button : colors.text} />
            <Text style={[styles.itemTitle, !focused && styles.titleFocus]}>{title}</Text>
        </View>
    )
}

export default TabBarIcon

const styles = StyleSheet.create({
    tabItemIcon:{
        alignSelf: 'center'
    },
    itemTitle:{
        alignSelf: 'center',
        color: colors.button,
        fontFamily: fonts.regular,
        fontSize: 14
    },
    titleFocus:{
        color: colors.text
    }
})