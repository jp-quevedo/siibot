import {
    Modal,
    StyleSheet,
    TextInput,
    View,
} from 'react-native'

import EventButton from './EventButton'

import colors from '../utils/globals/colors'

const ItemUpdateModal = ({
    deleteItem,
    itemSelected,
    modalVisible,
    onHandleModal,
    onHandleUpdateAmount,
    onHandleUpdateName,
    saveItemUpdate,
    screenWidth,
}) => {
    return (
        <Modal
            visible={modalVisible}
            animationType='slide'
            onRequestClose={() => onHandleModal({})}
        >
            <View style={[styles.itemModal, {width: screenWidth - 20}]}>
                <TextInput 
                    maxLength={20}
                    onChangeText={onHandleUpdateName}
                    placeholder='GLOSA'
                    placeholderTextColor={colors.text}
                    style={[styles.textInput, {width: screenWidth - 60}]}
                    value={itemSelected.name}
                />
                <TextInput
                    maxLength={10}
                    onChangeText={onHandleUpdateAmount}
                    placeholder='MONTO'
                    placeholderTextColor={colors.text}
                    style={[styles.textInput, {width: screenWidth - 60}]}
                    value={itemSelected.amount}
                />
                <EventButton
                    onPress={() => saveItemUpdate(itemSelected)}
                    screenWidth={screenWidth}
                    title='GUARDAR'
                />
                <EventButton
                    onPress={deleteItem}
                    screenWidth={screenWidth}
                    title='BORRAR'
                />
                <EventButton
                    onPress={() => onHandleModal({})}
                    screenWidth={screenWidth}
                    title='CANCELAR'
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
        marginTop: 10,
        paddingVertical: 20,
    },


    itemText: {
        color: colors.text,
        fontSize: 16,
        fontWeight: '500',
        paddingHorizontal: 20,
    },

    textInput: {
        alignSelf: 'center',
        backgroundColor: colors.input,
        borderColor: colors.input,
        borderRadius: 8,
        padding: 10,
    },

})