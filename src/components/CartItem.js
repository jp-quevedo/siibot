import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const CartItem = ({ item }) => {
    return (
        <View style = { styles.cartItemCard }>
            <Text style = { styles.cartItemText }>Suscripción: { item.title }</Text>
            <Text style = { styles.cartItemText }>Descripción: { item.description }</Text>
            <Text style = { styles.cartItemText }>Precio: $ { item.price }</Text>
            <MaterialIcons name = 'delete' size = { 40 } style = { styles.cartItemIcon } color = { colors.text } />
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    cartItemCard: {
        backgroundColor: colors.container,
        borderColor: colors.container,
        borderRadius: 16,
        gap: 10,
        height: 'auto',
        marginTop: 20,
        paddingVertical: 20
    },
    cartItemText: {
        color: colors.text,
        fontFamily: fonts.regular,
        fontSize: 16,
        paddingHorizontal: 20
    },
    cartItemIcon: {
        alignSelf: 'center'
    }
})