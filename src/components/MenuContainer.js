import {
    StyleSheet,
    View,
} from 'react-native'

import MenuButton from './MenuButton'

import colors from '../utils/globals/colors'

const MenuContainer = ({screenWidth}) => {
    return (
        <View style={[styles.menuContainer, {width: screenWidth}]}>
            <MenuButton title='INICIO' />
            <MenuButton title='BALANCE' />
            <MenuButton title='DETALLE' />
            <MenuButton title='PERFIL' />
        </View>
    )
}

export default MenuContainer

const styles = StyleSheet.create({

    menuContainer: {
        backgroundColor: colors.container,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 10,
    },

})