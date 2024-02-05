import {
    StyleSheet,
    View,
} from 'react-native'

import MenuButton from './MenuButton'

const MenuContainer = () => {
    return (
        <View style={styles.menuContainer}>
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
        backgroundColor: '#202020',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 15,
        width: '95%'
    },

})