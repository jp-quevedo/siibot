import {
    StyleSheet,
    Switch,
    Text,
    View,
} from 'react-native'

import EventButton from './EventButton'
import ItemUpdateModal from '../components/ItemUpdateModal'

import itemsData from '../utils/data/itemsData.json'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const Item = ({
    item,
    windowWidth,
    // modal
    itemSelected,
    modalVisible,
    setItemSelected,
    setModalVisible,
}) => {

    const onHandleModal = (item) => {
        setItemSelected(item)
        setModalVisible(!modalVisible)
    }

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
                windowWidth={windowWidth}
                title='Editar'
            />
            <ItemUpdateModal 
                itemSelected={itemSelected}
                modalVisible={modalVisible}
                setItemSelected={setItemSelected}
                setModalVisible={setModalVisible}
                onHandleModal={onHandleModal}
                windowWidth={windowWidth}
            />
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
        marginBottom: 10,
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