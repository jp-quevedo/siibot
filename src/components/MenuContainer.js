import {
    Dimensions,
    StyleSheet,
    View,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import MenuButton from './MenuButton'

import colors from '../utils/globals/colors'

const MenuContainer = () => {

    const windowWidth = Dimensions.get('window').width
    
    return (
        <View style={[styles.menuContainer, {width: windowWidth}]}>
            <MaterialIcons name='home' size={45} color='white' style={styles.itemIcon}/>
            <MaterialIcons name='account-balance-wallet' size={45} color='white' style={styles.itemIcon}/>
            <MaterialIcons name='feed' size={45} color='white' style={styles.itemIcon}/>
            <MaterialIcons name='account-box' size={45} color='white' style={styles.itemIcon}/>
        </View>
    )
}

export default MenuContainer

const styles = StyleSheet.create({
    menuContainer:{
        backgroundColor: colors.container,
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-evenly',
    },
    itemIcon:{
        alignSelf: 'center',
    }
})