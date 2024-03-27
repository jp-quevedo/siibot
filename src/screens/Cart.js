import { useEffect, useState } from 'react'
import {
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native'
import { useSelector } from 'react-redux'

import { useGetCartQuery } from '../app/services/shop'
import CartItem from '../components/CartItem'
import EventButton from '../components/EventButton'
import cart from '../utils/data/cart.json'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const Cart = () => {

    const windowWidth = Dimensions.get('window').width

    // const localId = useSelector((state) => state.auth.localId)
    // const { data } = useGetCartQuery(localId)
    // const [ cart, setCart ] = useState({})
    // let differenceInDays = 0
    // useEffect(() => {
    //     const fetchFilteredCart = async () => {
    //         if (data) {
    //             setCart(data)
    //             let today = new Date()
    //             let createdAt = new Date(cart.createdAt)
    //             let differenceInTime = today.getTime() - createdAt.getTime()
    //             let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24))
    //         }
    //     }
    //     fetchFilteredCart()
    // }, [ data ])

    return (
        <View style = {[ styles.cartContainer, { width: windowWidth - 20 } ]}>
            <FlatList
                data = { cart.products }
                keyExtractor = { (item) => item.id }
                renderItem = {({ item }) => <CartItem item = { item }/>}
            />
            <View style = { styles.purchaseContainer }>
                <Text style = { styles.purchaseTotal }>
                    Total: ${ cart.total_price }
                </Text>
                <EventButton
                    // onPress={}
                    title = 'Confirmar'
                />
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    cartContainer: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    purchaseContainer: {
        alignItems: 'center',
        backgroundColor: colors.container,
        borderColor: colors.container,
        borderRadius: 16,
        gap: 10,
        height: 'auto',
        marginTop: 20,
        paddingVertical: 20
    },
    purchaseTotal: {
        color: colors.text,
        fontFamily: fonts.bold,
        fontSize: 16
    }
})