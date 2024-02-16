import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const Header = ({title, windowWidth}) => {
    return (
        <View style={[styles.headerContainer, {width: windowWidth}]}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor: colors.container,
        height: 80,
        justifyContent: 'center',
    },
    headerTitle:{
        color: colors.text,
        fontFamily: fonts.regular,
        fontSize: 20,
        marginLeft: 30,
    },
})