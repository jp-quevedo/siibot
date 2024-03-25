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

const Item = ({
    item,
    navigation
}) => {

    const windowWidth = Dimensions.get('window').width

    const [ itemSelected, setItemSelected ] = useState({})
    const [ modalVisible, setModalVisible ] = useState(false)

    const onHandleModal = (item) => {
        setItemSelected(item)
        setModalVisible(!modalVisible)
    }

    return (
        <View style = {[ styles.itemCard, { width: windowWidth - 20 } ]}>
            <Text style = { styles.itemText }>Categoría :    { item.category }</Text>
            <Text style = { styles.itemText }>Glosa :    { item.name }</Text>
            <Text style = { styles.itemText }>Monto :    { item.amount }</Text>
            <Text style = { styles.itemText }>Impuesto :    { item.taxes }</Text>
            <Text style = { styles.itemText }>Fecha :    { item.date }</Text>
            <EventButton
                onPress={ () => onHandleModal(item) }
                title = 'Editar'
            />
            <ItemUpdateModal 
                itemSelected = { itemSelected }
                modalVisible = { modalVisible }
                navigation = { navigation }
                onHandleModal = { onHandleModal }
                setItemSelected = { setItemSelected }
                setModalVisible = { setModalVisible }
            />
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    itemCard: {
        backgroundColor: colors.container,
        borderColor: colors.container,
        borderRadius: 16,
        gap: 10,
        height: 'auto',
        marginTop: 20,
        paddingVertical: 20
    },
    itemText:{
        color: colors.text,
        fontFamily: fonts.regular,
        fontSize: 16,
        paddingHorizontal: 20
    }
})