import { useState } from 'react'
import {
    Dimensions,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native'

import EventButton from './EventButton'
import ItemList from '../components/ItemList'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const Order = ({
    navigation,
    order
}) => {

    const windowWidth = Dimensions.get('window').width

    const [ orderSelected, setOrderSelected ] = useState({})
    const [ modalVisible, setModalVisible ] = useState(false)

    // const onHandleModal = (order) => {
    //     setOrderSelected(order)
    //     setModalVisible(!modalVisible)
    // }

    return (
        <ScrollView style = {[ styles.orderCard, { width: windowWidth - 20 } ]}>
            <Text style = { styles.orderText }>Año :    { order.name }</Text>
            <Text style = { styles.orderText }>Total del Ejercicio :    { order.total }</Text>
            <Text style = { styles.orderText }>Resultado :    { order.taxes }</Text>
            <Text style = { styles.orderText }>Operaciones :</Text>
            <View style = { styles.itemByCategory }>
                <FlatList
                    data = { order.items }
                    keyExtractor = { item => item.id }
                    renderItem = {({ item }) =>
                        <ItemList
                            item = { item }
                            navigation = { navigation }
                        />
                    }
                />
            </View>
            <EventButton
                // onPress={ () => onHandleModal(order) }
                title = 'Exportar'
            />
        </ScrollView>
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