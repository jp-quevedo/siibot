import { useState } from 'react'
import {
    Dimensions,
    StyleSheet,
    Text,
    View
} from 'react-native'

import EventButton from './EventButton'
import ItemUpdateModal from '../components/ItemUpdateModal'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const Order = ({ order, navigation }) => {

    const windowWidth = Dimensions.get('window').width

    const [ orderSelected, setOrderSelected ] = useState({})
    const [ modalVisible, setModalVisible ] = useState(false)

    const onHandleModal = (order) => {
        setOrderSelected(order)
        setModalVisible(!modalVisible)
    }

    return (
        <View style = {[ styles.orderCard, { width: windowWidth - 20 } ]}>
            <Text style = { styles.orderText }>Año :    { order.name }</Text>
            <Text style = { styles.orderText }>Total del Ejercicio :    { order.total }</Text>
            <Text style = { styles.orderText }>Resultado :    { order.taxes }</Text>
            <Text style = { styles.orderText }>Operaciones :    { order.date }</Text>
            <EventButton
                onPress={ () => onHandleModal(order) }
                title = 'Exportar'
            />
            {/* <ItemUpdateModal 
                itemSelected = { orderSelected }
                modalVisible = { modalVisible }
                setItemSelected = { setItemSelected }
                setModalVisible = { setModalVisible }
                onHandleModal = { onHandleModal }
                navigation = { navigation }
            /> */}
        </View>
    )
}

export default Order

const styles = StyleSheet.create({
    orderCard: {
        backgroundColor: colors.container,
        borderColor: colors.container,
        borderRadius: 16,
        gap: 10,
        height: 'auto',
        marginTop: 20,
        paddingVertical: 20
    },
    orderText:{
        color: colors.text,
        fontFamily: fonts.regular,
        fontSize: 16,
        paddingHorizontal: 20
    }
})