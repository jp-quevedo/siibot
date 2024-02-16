import {
    Image,
    StyleSheet,
    View,
} from 'react-native'

import MenuButton from './MenuButton'

import colors from '../utils/globals/colors'

const MenuContainer = ({windowWidth}) => {
    return (
        <View style={[styles.menuContainer, {width: windowWidth}]}>
            <Image
                source={{uri: '../../assets/icons/home.png'}}
                style={styles.itemIcon}
                resizeMode='cover'
            />
            <Image
                source={{uri: '../../assets/icons/balance.png'}}
                style={styles.itemIcon}
                resizeMode='cover'
            />
            <Image
                source={{uri: '../../assets/icons/detail.png'}}
                style={styles.itemIcon}
                resizeMode='cover'
            />
            <Image
                source={{uri: '../../assets/icons/profile.png'}}
                style={styles.itemIcon}
                resizeMode='cover'
            />
        </View>
    )
}

export default MenuContainer

const styles = StyleSheet.create({
    menuContainer:{
        backgroundColor: colors.container,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})