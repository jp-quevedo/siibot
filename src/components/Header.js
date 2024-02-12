import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const Header = ({title, screenWidth={screenWidth}}) => {
    return (
        <View style={[styles.headerContainer, {width: screenWidth}]}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({

    headerContainer:{
        backgroundColor: colors.container,
        height: 100,
        justifyContent: 'center',
    },

    headerTitle:{
        color: colors.text,
        fontFamily: fonts.bold,
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 30,
        marginTop: 15,
    },

})