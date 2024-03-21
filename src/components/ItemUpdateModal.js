import { useSelector } from 'react-redux'
import {
    Dimensions,
    Modal,
    StyleSheet,
    TextInput,
    View
} from 'react-native'
import { getDatabase, ref, update, remove } from 'firebase/database'

import EventButton from './EventButton'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const ItemUpdateModal = ({
    itemSelected,
    modalVisible,
    onHandleModal,
    setItemSelected,
    setModalVisible,
    navigation
}) => {

    const windowWidth = Dimensions.get('window').width

    const localId = useSelector((state) => state.auth.localId)
    const db = getDatabase()
    const itemId = itemSelected.id
    const itemRef = ref(db, `/users/${ localId }/items/${ itemId }`)

    const deleteItem = () => {
        remove(itemRef)
        navigation.navigate('Home')
    }
    
    const onHandleUpdateAmount = (input) => {
        setItemSelected({ ...itemSelected, amount: input })
    }
    
    const onHandleUpdateName = (input) => {
        setItemSelected({ ...itemSelected, name: input })
    }
    
    const saveItemUpdate = (itemSelected) => {
        update(itemRef, { ...itemSelected })
        setItemSelected({})
        navigation.goBack()
        setModalVisible(!modalVisible)
    }

    return (
        <Modal
            visible = { modalVisible }
            animationType = 'slide'
            onRequestClose = { () => onHandleModal({}) }
            transparent = { true }
        >
            <View style = {[ styles.itemModal, { width: windowWidth - 20 } ]}>
                <TextInput 
                    maxLength = { 20 }
                    onChangeText = { onHandleUpdateName }
                    placeholder = 'Glosa'
                    placeholderTextColor = { colors.text }
                    style = {[ styles.textInput, { width: windowWidth - 60 } ]}
                    value = { itemSelected.name }
                />
                <TextInput
                    maxLength = { 10 }
                    onChangeText = { onHandleUpdateAmount }
                    placeholder = 'Monto'
                    placeholderTextColor = { colors.text }
                    style = {[ styles.textInput, { width: windowWidth - 60 } ]}
                    value = { itemSelected.amount }
                />
                <EventButton
                    onPress = { () => saveItemUpdate(itemSelected) }
                    title = 'Guardar'
                />
                <EventButton
                    onPress = { deleteItem }
                    title = 'Borrar'
                />
                <EventButton
                    onPress={ () => onHandleModal({}) }
                    title = 'Cancelar'
                />
            </View>
        </Modal>
    )
}

export default ItemUpdateModal

const styles = StyleSheet.create({
    itemModal: {
        alignSelf: 'center',
        backgroundColor: colors.container,
        borderColor: colors.container,
        borderRadius: 16,
        gap: 10,
        justifyContent: 'center',
        height: 'auto',
        marginTop: 80,
        paddingVertical: 20,
    },
    itemText: {
        color: colors.text,
        fontFamily: fonts.regular,
        fontSize: 16,
        paddingHorizontal: 20
    },
    textInput: {
        alignSelf: 'center',
        backgroundColor: colors.input,
        borderColor: colors.input,
        borderRadius: 8,
        padding: 10
    }
})