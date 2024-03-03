import {
    Dimensions,
    Modal,
    StyleSheet,
    TextInput,
    View
} from 'react-native'

import EventButton from './EventButton'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const ItemUpdateModal = ({
    itemSelected,
    modalVisible,
    onHandleModal,
    setItemSelected,
    setModalVisible,
}) => {

    const windowWidth = Dimensions.get('window').width

    const deleteItem = () => {
        setItemList(itemList.filter(item => item.id != itemSelected.id))
        setModalVisible(!modalVisible)
    }
    
    const onHandleUpdateAmount = (input) => {
        setItemSelected({...itemSelected, amount: input})
    }
    
    const onHandleUpdateName = (input) => {
        setItemSelected({...itemSelected, name: input})
    }
    
    const saveItemUpdate = (itemSelected) => {
        setItemList(itemList.map(item => {
          if(item.id === itemSelected.id) {
            return ({...itemSelected})
          }
        }))
        setModalVisible(!modalVisible)
    }

    return (
        <Modal
            visible={modalVisible}
            animationType='slide'
            onRequestClose={() => onHandleModal({})}
        >
            <View style={[styles.itemModal, {width: windowWidth - 20}]}>
                <TextInput 
                    maxLength={20}
                    onChangeText={onHandleUpdateName}
                    placeholder='Glosa'
                    placeholderTextColor={colors.text}
                    style={[styles.textInput, {width: windowWidth - 60}]}
                    value={itemSelected.name}
                />
                <TextInput
                    maxLength={10}
                    onChangeText={onHandleUpdateAmount}
                    placeholder='Monto'
                    placeholderTextColor={colors.text}
                    style={[styles.textInput, {width: windowWidth - 60}]}
                    value={itemSelected.amount}
                />
                <EventButton
                    onPress={() => saveItemUpdate(itemSelected)}
                    title='Guardar'
                />
                <EventButton
                    onPress={deleteItem}
                    title='Borrar'
                />
                <EventButton
                    onPress={() => onHandleModal({})}
                    title='Cancelar'
                />
            </View>
        </Modal>
    )
}

export default ItemUpdateModal

const styles = StyleSheet.create({
    itemModal:{
        alignSelf: 'center',
        backgroundColor: colors.container,
        borderColor: colors.container,
        borderRadius: 16,
        gap: 10,
        justifyContent: 'center',
        height: 'auto',
        marginTop: 10,
        paddingVertical: 20
    },
    itemText:{
        color: colors.text,
        fontFamily: fonts.regular,
        fontSize: 16,
        paddingHorizontal: 20
    },
    textInput:{
        alignSelf: 'center',
        backgroundColor: colors.input,
        borderColor: colors.input,
        borderRadius: 8,
        padding: 10
    }
})