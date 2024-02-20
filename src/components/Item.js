import { useState } from 'react'
import {
    Dimensions,
    StyleSheet,
    Switch,
    Text,
    View,
} from 'react-native'

import EventButton from './EventButton'
import ItemUpdateModal from '../components/ItemUpdateModal'

import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import itemsData from '../utils/data/itemsData.json'

// falta corregir lógica de modal
const Item = ({item}) => {

    const windowWidth = Dimensions.get('window').width

    const [modalVisible, setModalVisible] = useState(false)

    // const onHandleModal = (item) => {
    //     setItemSelected(item)
    //     setModalVisible(!modalVisible)
    // }

    const updatePaidStatus = (id) => {
        const update = itemsData.map(item => {
          if(item.id === id) {
            return ({
              ...item,...{paid: !item.paid}
            })}
            return item
        })
        // falta hacer update en archivo
      }

    return (
        <View style={[styles.itemCard, {width: windowWidth - 20}]}>
            <Text style={styles.itemText}>Categoría :    {item.category}</Text>
            <Text style={styles.itemText}>Glosa :    {item.name}</Text>
            <Text style={styles.itemText}>Monto :    {item.amount}</Text>
            <Text style={styles.itemText}>Fecha :    {item.date}</Text>
            <View style={styles.switchContainer}>
                <Text style={styles.itemText}>Estado de Pago: </Text>
                <Switch
                    value={item.paid}
                    onValueChange={() => updatePaidStatus(item.id)}
                />
            </View>
            <EventButton
                onPress={() => onHandleModal(item)}
                title='Editar'
            />
            {/* <ItemUpdateModal 
                itemSelected={itemSelected}
                modalVisible={modalVisible}
                setItemSelected={setItemSelected}
                setModalVisible={setModalVisible}
                onHandleModal={onHandleModal}
            /> */}
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    itemCard:{
        backgroundColor: colors.container,
        borderColor: colors.container,
        borderRadius: 16,
        gap: 10,
        height: 'auto',
        marginTop: 20,
        paddingVertical: 20,
    },
    itemText:{
        color: colors.text,
        fontFamily: fonts.regular,
        fontSize: 16,
        paddingHorizontal: 20,
    },
    switchContainer:{
        alignItems: 'center',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
})