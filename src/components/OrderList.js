import {
    Dimensions,
    Pressable,
    StyleSheet,
    Text
} from 'react-native'
import { useDispatch } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { setOrderIdSelected } from '../features/order/orderSlice'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const OrderList = ({
    navigation,
    order
}) => {

    const windowWidth = Dimensions.get('window').width

    const dispatch = useDispatch()
    
    return (
        <Pressable
            onPress = {() => {
                dispatch(setOrderIdSelected(order))
                navigation.navigate('OrderContainer', { orderId: order.id }, navigation = { navigation })
            }}
            style = {[ styles.orderListContainer, { width: windowWidth - 20 } ]}
            title = 'Detalle'
        >
            <MaterialCommunityIcons name = 'export' size = { 30 } color = 'white' style = { styles.orderIcon }/>
            <Text style = { styles.orderTitle }>{ order.name }</Text>
        </Pressable>
    )
}

export default OrderList

const styles = StyleSheet.create({
    orderListContainer: {
        alignItems: 'center',
        backgroundColor: colors.container,
        borderRadius: 16,
        flexDirection: 'row',
        marginTop: 20,
        paddingVertical: 20
    },
    orderTitle: {
        color: colors.text,
        fontFamily: fonts.regular,
        fontSize: 16
    },
    orderIcon: {
        marginHorizontal: 20
    }
})