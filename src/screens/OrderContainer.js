import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
    StyleSheet,
    View
} from 'react-native'

import Order from '../components/Order'

const OrderContainer = ({
    navigation
}) => {

    const [ order, setOrder ] = useState({})
    const orderSelected = useSelector(state => state.order.value.orderIdSelected)
    useEffect(() => {
        setOrder(orderSelected)
    }, [ orderSelected ])
    
    return (
        <View style = { styles.orderContainer }>
            <Order
                order = { order }
                navigation = { navigation }
            />
        </View>
    )
}

export default OrderContainer

const styles = StyleSheet.create({
    orderContainer: {
        alignItems: 'center',
        gap: 20
    }
})